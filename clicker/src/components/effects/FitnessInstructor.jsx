// FitnessInstructor.jsx - Adds fitness/trainer visuals and motivational audio
// Affected by upgrades: 33 (Fitness Instructor)
import React, { useState, useEffect } from 'react';

export default function FitnessInstructor() {
  const [currentExercise, setCurrentExercise] = useState(0);
  
  const exercises = [
    { name: "Push-ups", emoji: "💪", reps: "10 reps" },
    { name: "Squats", emoji: "🏃‍♀️", reps: "15 reps" },
    { name: "Jumping Jacks", emoji: "🤸‍♂️", reps: "20 reps" },
    { name: "Planks", emoji: "🧘‍♂️", reps: "30 sec" },
    { name: "Burpees", emoji: "🏋️‍♀️", reps: "5 reps" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExercise(prev => (prev + 1) % exercises.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [exercises.length]);

  const exercise = exercises[currentExercise];

  return (
    <div className="fitness-instructor-container">
      <div style={{
        position: 'fixed',
        bottom: '420px',
        left: '20px',
        width: '220px',
        height: '160px',
        background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        borderRadius: '12px',
        border: '2px solid #a93226',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        zIndex: 5,
        animation: 'fitnessMotivation 2s ease-in-out infinite',
      }}>
        <div style={{ fontSize: '20px', marginBottom: '8px' }}>
          🏃‍♀️ Personal Trainer
        </div>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>
          {exercise.emoji}
        </div>
        <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>
          {exercise.name}
        </div>
        <div style={{ fontSize: '12px' }}>
          {exercise.reps}
        </div>
        <div style={{ fontSize: '10px', marginTop: '8px', textAlign: 'center' }}>
          "You can do it! 💪"
        </div>
      </div>
      <style>
        {`
          @keyframes fitnessMotivation {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
        `}
      </style>
    </div>
  );
}