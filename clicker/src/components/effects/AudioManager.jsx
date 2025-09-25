// AudioManager.jsx - Centralized audio management for all effects
// Manages background music, sound effects, and audio mixing
import React, { useEffect, useRef } from 'react';

export default function AudioManager({ ownedUpgrades = [] }) {
  const audioContextRef = useRef(null);
  const sourcesRef = useRef({});

  useEffect(() => {
    // Initialize Web Audio API
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    return () => {
      // Cleanup audio context
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    // Manage audio based on owned upgrades
    const audioEffects = {
      11: 'lofi', // Lo-fi Player
      12: 'rain', // Rain Effect  
      14: 'nature', // Cat Content
      15: 'thunder', // Thunder Effect
      17: 'minecraft', // Minecraft Player
      18: 'meditation', // Meditation
      33: 'fitness', // Fitness Instructor
    };

    // Start/stop audio effects based on owned upgrades
    Object.entries(audioEffects).forEach(([upgradeId, audioType]) => {
      const isOwned = ownedUpgrades.some(upgrade => upgrade.id === parseInt(upgradeId));
      
      if (isOwned && !sourcesRef.current[audioType]) {
        startAudioEffect(audioType);
      } else if (!isOwned && sourcesRef.current[audioType]) {
        stopAudioEffect(audioType);
      }
    });
  }, [ownedUpgrades]);

  const startAudioEffect = (audioType) => {
    if (!audioContextRef.current) return;

    // Create audio source based on type
    switch (audioType) {
      case 'lofi':
        createLofiAudio();
        break;
      case 'rain':
        createRainAudio();
        break;
      case 'nature':
        createNatureAudio();
        break;
      case 'thunder':
        createThunderAudio();
        break;
      case 'minecraft':
        createMinecraftAudio();
        break;
      case 'meditation':
        createMeditationAudio();
        break;
      case 'fitness':
        createFitnessAudio();
        break;
      default:
        break;
    }
  };

  const stopAudioEffect = (audioType) => {
    if (sourcesRef.current[audioType]) {
      sourcesRef.current[audioType].disconnect();
      delete sourcesRef.current[audioType];
    }
  };

  const createLofiAudio = () => {
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(220, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    
    sourcesRef.current.lofi = oscillator;
  };

  const createRainAudio = () => {
    const ctx = audioContextRef.current;
    const noise = ctx.createBufferSource();
    const gainNode = ctx.createGain();
    
    // Create white noise for rain effect
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 0.2 - 0.1;
    }
    
    noise.buffer = buffer;
    noise.loop = true;
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    
    noise.connect(gainNode);
    gainNode.connect(ctx.destination);
    noise.start();
    
    sourcesRef.current.rain = noise;
  };

  const createNatureAudio = () => {
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, ctx.currentTime);
    
    // Simulate bird chirping with frequency modulation
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    
    lfo.frequency.setValueAtTime(2, ctx.currentTime);
    lfoGain.gain.setValueAtTime(50, ctx.currentTime);
    
    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    lfo.start();
    
    sourcesRef.current.nature = { oscillator, lfo };
  };

  const createThunderAudio = () => {
    const ctx = audioContextRef.current;
    
    // Create thunder rumble with low frequency noise
    const noise = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gainNode = ctx.createGain();
    
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 0.4 - 0.2;
    }
    
    noise.buffer = buffer;
    noise.loop = true;
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, ctx.currentTime);
    
    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    noise.start();
    
    sourcesRef.current.thunder = noise;
  };

  const createMinecraftAudio = () => {
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Simple 8-bit style melody
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(330, ctx.currentTime);
    
    // Create simple melody pattern
    const melody = [330, 392, 440, 392, 330, 294, 330];
    let noteIndex = 0;
    
    const playNote = () => {
      oscillator.frequency.setValueAtTime(melody[noteIndex], ctx.currentTime);
      noteIndex = (noteIndex + 1) % melody.length;
    };
    
    const melodyInterval = setInterval(playNote, 800);
    
    gainNode.gain.setValueAtTime(0.06, ctx.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    
    sourcesRef.current.minecraft = { oscillator, interval: melodyInterval };
  };

  const createMeditationAudio = () => {
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(174, ctx.currentTime); // Healing frequency
    
    // Add gentle vibrato
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    
    lfo.frequency.setValueAtTime(0.5, ctx.currentTime);
    lfoGain.gain.setValueAtTime(2, ctx.currentTime);
    
    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    
    gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    lfo.start();
    
    sourcesRef.current.meditation = { oscillator, lfo };
  };

  const createFitnessAudio = () => {
    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    // Upbeat fitness music simulation
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(130, ctx.currentTime);
    
    // Create pumping bass effect
    const pumpInterval = setInterval(() => {
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.02, ctx.currentTime + 0.1);
    }, 500);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    
    sourcesRef.current.fitness = { oscillator, interval: pumpInterval };
  };

  // Component doesn't render anything visible
  return null;
}