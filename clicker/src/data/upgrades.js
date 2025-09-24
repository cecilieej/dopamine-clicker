// Structure: {id, name, type, cost, dps, unlockAt, flavorText, maxOwned, chaosBoost}

export const upgradesData = [
  // Generator Upgrade (only this one is repeatable)
  { 
    id: 1, 
    name: "Bouncing DVD", 
    type: "generator", 
    cost: 5, 
    dps: 0.1, 
    unlockAt: 2, 
    flavorText: "+1 dopamine per bounce", 
    maxOwned: null, 
    chaosBoost: 1 
  },

  // Visual/Permanent Upgrades (maxOwned: 1)
  { 
    id: 2, 
    name: "Add Tab Title", // A title and an icon is added to tab
    type: "visual", 
    cost: 5, 
    dps: 0, 
    unlockAt: 5, 
    flavorText: "It's good for SEO", 
    maxOwned: 1, 
    chaosBoost: 1 
  },
  { 
    id: 3, 
    name: "Amount Animation", // Plays an animation when clicking
    type: "visual", 
    cost: 10, 
    dps: 0, 
    unlockAt: 8, 
    flavorText: "+1 dopamine per click", 
    maxOwned: 1, 
    chaosBoost: 2 
  },
  { 
    id: 4, 
    name: "SPS Counter", // Shows a 'stimulation per second' counter (informational UI)
    type: "visual", 
    cost: 25, 
    dps: 0, 
    unlockAt: 15, 
    flavorText: "See your dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 1 
  },
  { 
    id: 5, 
    name: "Button Upgrade", // Upgrades the appearance & sound of the button
    type: "visual", 
    cost: 40, 
    dps: 0, 
    unlockAt: 25, 
    flavorText: "+1 dopamine per click", 
    maxOwned: 1, 
    chaosBoost: 2 
  },
  { 
    id: 6, 
    name: "DVD Bounce Sound", // Makes bouncing DVDs produce sound
    type: "visual", 
    cost: 75, 
    dps: 0, 
    unlockAt: 40, 
    flavorText: "+5 dopamine per bounce", 
    maxOwned: 1, 
    chaosBoost: 3 
  },
  { 
    id: 7, 
    name: "Subway Surfers", // Embeds Subway Surfers visuals  
    type: "visual", 
    cost: 100, 
    dps: 3, 
    unlockAt: 60, 
    flavorText: "+3 dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 5 
  },
  { 
    id: 8, 
    name: "Breaking News", // Adds a news ticker/banner
    type: "visual", 
    cost: 100, 
    dps: 4, 
    unlockAt: 70, 
    flavorText: "Stay up to date with the latest news. +4 dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 4 
  },
  { 
    id: 9, 
    name: "Critical Hits", // chance for 'critical' clicks (5% chance)
    type: "visual", 
    cost: 200, 
    dps: 0, 
    unlockAt: 120, 
    flavorText: "Adds a 5% chance of a critical hit", 
    maxOwned: 1, 
    chaosBoost: 3 
  },
  { 
    id: 10, 
    name: "Lofi Beats", // Adds lofi music + visuals (Lofi Girl)
    type: "visual", 
    cost: 250, 
    dps: 10, 
    unlockAt: 150, 
    flavorText: "Helps you study and relax. +10 dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 6 
  },
  { 
    id: 11, 
    name: "Rain Sounds", // Adds rain sound + visuals
    type: "visual", 
    cost: 300, 
    dps: 15, 
    unlockAt: 200, 
    flavorText: "Soothing rain sounds. +15 dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 5 
  },
  { 
    id: 12, 
    name: "Pinwheel", // Adds a pinwheel effect on the button
    type: "visual", 
    cost: 700, 
    dps: 20, 
    unlockAt: 400, 
    flavorText: "+20 dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 7 
  },
  { 
    id: 13, 
    name: "Hydraulic Press", // Adds a hydraulic press mechanics
    type: "visual", 
    cost: 1000, 
    dps: 0, 
    unlockAt: 600, 
    flavorText: "Squish things slowly", 
    maxOwned: 1, 
    chaosBoost: 8 
  },
  { 
    id: 14, 
    name: "Achievements", // Unlocks the achievements UI and tracking system
    type: "visual", 
    cost: 1500, 
    dps: 0, 
    unlockAt: 800, 
    flavorText: "Celebrate your accomplishments", 
    maxOwned: 1, 
    chaosBoost: 4 
  },
  { 
    id: 15, 
    name: "Thunder Sounds", // Adds ambient thunder sound
    type: "visual", 
    cost: 2000, 
    dps: 8, 
    unlockAt: 1000, 
    flavorText: "Adds ambient rolling thunder sound. +8 dopamine per second", 
    maxOwned: 1, 
    chaosBoost: 6 
  },
  { 
    id: 16, 
    name: "Popcorn Animation", // Adds popcorn animation effect on clicks
    type: "visual", 
    cost: 3500, 
    dps: 0, 
    unlockAt: 1500, 
    flavorText: "+8 dopamine per click", 
    maxOwned: 1, 
    chaosBoost: 5 
  },
  { 
    id: 17, 
    name: "Slime", 
    type: "visual", 
    cost: 4000, 
    dps: 35, 
    unlockAt: 1800, 
    flavorText: "Adds ASMR slime visuals/videos; gives +35 sps", 
    maxOwned: 1, 
    chaosBoost: 9 
  },
  { 
    id: 18, 
    name: "Technicolor", 
    type: "visual", 
    cost: 5000, 
    dps: 0, 
    unlockAt: 2200, 
    flavorText: "DVDs change color when bouncing; gives +10 spb", 
    maxOwned: 1, 
    chaosBoost: 3 
  },
  { 
    id: 19, 
    name: "Mukbang", 
    type: "visual", 
    cost: 6000, 
    dps: 60, 
    unlockAt: 2500, 
    flavorText: "Adds a mukbang video; gives +60 sps", 
    maxOwned: 1, 
    chaosBoost: 12 
  },
  { 
    id: 20, 
    name: "Screen Time", // Unlocks the 'Screen Time' menu (for tracking stats)
    type: "visual", 
    cost: 7500, 
    dps: 0, 
    unlockAt: 3000, 
    flavorText: "Manage your screen habits", 
    maxOwned: 1, 
    chaosBoost: 2 
  },
  { 
    id: 21, 
    name: "Levels", // Enables leveling / experience mechanics, which yield bonus stimulation when leveling up
    type: "visual", 
    cost: 8000, 
    dps: 0, 
    unlockAt: 3500, 
    flavorText: "Gain experience and level up", 
    maxOwned: 1, 
    chaosBoost: 6 
  },
  { 
    id: 22, 
    name: "True Crime Podcast", // Adds a true crime podcast audio/visual feed
    type: "visual", 
    cost: 10000, 
    dps: 100, 
    unlockAt: 4000, 
    flavorText: "Listen to a murder. +100 dopamine per second.", 
    maxOwned: 1, 
    chaosBoost: 15 
  },
  { 
    id: 23, 
    name: "Auto Hydraulics", 
    type: "visual", 
    cost: 15000, 
    dps: 0, 
    unlockAt: 6000, 
    flavorText: "Automates the hydraulic press (no manual clicking needed)", 
    maxOwned: 1, 
    chaosBoost: 8 
  },
  { 
    id: 24, 
    name: "Corner Hits", 
    type: "visual", 
    cost: 15000, 
    dps: 0, 
    unlockAt: 6500, 
    flavorText: "Makes DVD logos hitting corners give extra stimulation (×10)", 
    maxOwned: 1, 
    chaosBoost: 10 
  },
  { 
    id: 25, 
    name: "UI Upgrade", 
    type: "visual", 
    cost: 15000, 
    dps: 0, 
    unlockAt: 7000, 
    flavorText: "Adds more UI customization (colors, gradients) (mostly cosmetic)", 
    maxOwned: 1, 
    chaosBoost: 3 
  },
  { 
    id: 26, 
    name: "Item Shop", 
    type: "visual", 
    cost: 17500, 
    dps: 0, 
    unlockAt: 8000, 
    flavorText: "Unlocks the cosmetic shop (cursors, trails, etc.)", 
    maxOwned: 1, 
    chaosBoost: 4 
  },
  { 
    id: 27, 
    name: "Loot Boxes", 
    type: "visual", 
    cost: 20000, 
    dps: 0, 
    unlockAt: 10000, 
    flavorText: "Adds loot boxes that spawn; opening them gives stimulation or rewards", 
    maxOwned: 1, 
    chaosBoost: 12 
  },
  { 
    id: 28, 
    name: "Button Upgrade II", 
    type: "visual", 
    cost: 25000, 
    dps: 0, 
    unlockAt: 12000, 
    flavorText: "Further upgrade: each click gives you 1% of your SPS as bonus stimulation", 
    maxOwned: 1, 
    chaosBoost: 5 
  },
  { 
    id: 29, 
    name: "Meditation", // Adds meditation visuals/audio
    type: "visual", 
    cost: 35000, 
    dps: 120, 
    unlockAt: 18000, 
    flavorText: "Help relax your mind", 
    maxOwned: 1, 
    chaosBoost: 10 
  },
  { 
    id: 30, 
    name: "Meditation ×2", // Doubles meditation yield / speeds it up
    type: "visual", 
    cost: 60000, 
    dps: 120, 
    unlockAt: 30000, 
    flavorText: "Meditate twice as fast", 
    maxOwned: 1, 
    chaosBoost: 8 
  },
  { 
    id: 31, 
    name: "Subway Surfers Unmuted", // Unmute the Subway Surfers visuals (adds audio)
    type: "visual", 
    cost: 50000, 
    dps: 150, 
    unlockAt: 25000, 
    flavorText: "Unmute Subway Surfers", 
    maxOwned: 1, 
    chaosBoost: 12 
  },
  { 
    id: 32, 
    name: "Email", // Unlocks an 'Inbox' / email system OR a phone-like notification system
    type: "visual", 
    cost: 60000, 
    dps: 0, 
    unlockAt: 35000, 
    flavorText: "Take a break and check your inbox", 
    maxOwned: 1, 
    chaosBoost: 4 
  },
  { 
    id: 33, 
    name: "Fitness Instructor", // Adds fitness/trainer visuals/audio
    type: "visual", 
    cost: 75000, 
    dps: 100, 
    unlockAt: 40000, 
    flavorText: "Get fit and stay motivated", 
    maxOwned: 1, 
    chaosBoost: 8 
  },
  { 
    id: 34, 
    name: "In-Game Currency (Gems)", 
    type: "visual", 
    cost: 100000, 
    dps: 0, 
    unlockAt: 50000, 
    flavorText: "Unlocks a 'Gems' currency for special cosmetics (not directly stimulative)", 
    maxOwned: 1, 
    chaosBoost: 5 
  },
  { 
    id: 35, 
    name: "Reaction Streamer", // Adds a streamer visual/audio feed
    type: "visual", 
    cost: 100000, 
    dps: 200, 
    unlockAt: 55000, 
    flavorText: "Add a friend in the chaos", 
    maxOwned: 1, 
    chaosBoost: 15 
  },
  { 
    id: 36, 
    name: "Tamagotchi", // Adds a virtual pet (you can interact/feed it!! hopefully!)
    type: "visual", 
    cost: 300000, 
    dps: 0, 
    unlockAt: 150000, 
    flavorText: "Adopt a virtual pet. Don't forget to feed him!", 
    maxOwned: 1, 
    chaosBoost: 6 
  },
  { 
    id: 37, 
    name: "Twitch Chat", // Adds a Twitch chat overlay / feature
    type: "visual", 
    cost: 500000, 
    dps: 0, 
    unlockAt: 250000, 
    flavorText: "Start streaming on Twitch. Have the chat keep you company", 
    maxOwned: 1, 
    chaosBoost: 12 
  },
  { 
    id: 38, 
    name: "DVD Speed II", // Doubles the DVD bounce speed (so more frequent bounces)
    type: "visual", 
    cost: 750000, 
    dps: 0, 
    unlockAt: 400000, 
    flavorText: "Double DVD speed", 
    maxOwned: 1, 
    chaosBoost: 15 
  },
  { 
    id: 39, 
    name: "Mindfulness App", // Adds mindfulness visuals/audio
    type: "visual", 
    cost: 900000, 
    dps: 1000, 
    unlockAt: 500000, 
    flavorText: "Become more mindful about your screen time", 
    maxOwned: 1, 
    chaosBoost: 25 
  },
  
  // The FINAL(!) upgrade
  { 
    id: 99, 
    name: "Touch Grass", 
    type: "visual", 
    cost: 1000000, 
    dps: 0, 
    unlockAt: 1000000, 
    flavorText: "The ultimate dopamine detox. Escape the simulation.", 
    maxOwned: 1, 
    chaosBoost: 0 
  },
];