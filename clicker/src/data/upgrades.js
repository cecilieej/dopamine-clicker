// Structure: {id, name, type, cost, dps, unlockAt, flavorText, maxOwned, chaosBoost}

export const upgradesData = [
  // Generator Upgrade (only this one is repeatable)
  { 
    id: 1, 
    name: "Bouncing DVD", // Each owned DVD logo bounces around the screen, giving dopamine on each bounce
    type: "generator", 
    cost: 5, 
    dps: 0.1, 
    unlockAt: 2, 
    flavorText: "+1 dopamine per bounce", 
    maxOwned: null, 
  },

  // Visual/Permanent Upgrades (maxOwned: 1)
  { 
    id: 2, 
    name: "Add Tab Title", // A title and an icon is added to tab - is initially just "Untitled"
    type: "visual", 
    cost: 5, 
    dps: 0, 
    unlockAt: 5, 
    flavorText: "It's good for SEO", 
    maxOwned: 1, 
  },
  { 
    id: 3, 
    name: "Amount Animation", // Now plays an animation when clicking
    type: "visual", 
    cost: 10, 
    dps: 0, 
    unlockAt: 8, 
    flavorText: "+1 dopamine per click", 
    maxOwned: 1, 
  },
  { 
    id: 4, 
    name: "DPS Counter", // Shows a 'dopamine per second' counter (informational UI)
    type: "visual", 
    cost: 25, 
    dps: 0, 
    unlockAt: 15, 
    flavorText: "See your dopamine per second", 
    maxOwned: 1, 
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
  },
  { 
    id: 7, 
    name: "Subway Surfers", // Embeds Subway Surfers visuals , e.g. https://www.youtube.com/watch?v=i0M4ARe9v0Y
    type: "visual", 
    cost: 100, 
    dps: 3, 
    unlockAt: 60, 
    flavorText: "+3 dopamine per second", 
    maxOwned: 1, 
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
  },
  { 
    id: 9, 
    name: "Critical Hits", // 5% chance for 'critical' clicks
    type: "visual", 
    cost: 200, 
    dps: 0, 
    unlockAt: 120, 
    flavorText: "Adds a 5% chance of a critical hit", 
    maxOwned: 1, 
  },
  { 
    id: 10, 
    name: "Lofi Beats", // Adds lofi music + visuals (Lofi Girl), e.g. https://www.youtube.com/watch?v=AzV77KFsLn4
    type: "visual", 
    cost: 250, 
    dps: 10, 
    unlockAt: 150, 
    flavorText: "Helps you study and relax. +10 dopamine per second", 
    maxOwned: 1, 
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
  },
  { 
    id: 13, 
    name: "Cat Videos", // Adds cat video visuals/audio, e.g. https://www.youtube.com/watch?v=C4oIkyW4H3k or https://tenor.com/view/cats-infinity-gif-18216694
    type: "visual", 
    cost: 1000, 
    dps: 25, 
    unlockAt: 600, 
    flavorText: "Watch cute cat videos. +25 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    // RECONSIDER WHETHER THIS IS WORTH IT TO STAY WITHIN SCOPE
    id: 14, 
    name: "Achievements", // Unlocks the achievements UI and tracking system
    type: "visual", 
    cost: 1500, 
    dps: 0, 
    unlockAt: 800, 
    flavorText: "Celebrate your accomplishments", 
    maxOwned: 1, 
  },
  { 
    id: 15, 
    name: "Thunder Sounds", // Adds ambient thunder sound, e.g. 
    type: "visual", 
    cost: 2000, 
    dps: 8, 
    unlockAt: 1000, 
    flavorText: "Adds ambient rolling thunder sound. +8 dopamine per second", 
    maxOwned: 1, 
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
  },
  { 
    id: 17, 
    name: "Soap Cutting", // Adds ASMR soap cutting visuals/videos, e.g. https://www.youtube.com/watch?v=CBuN-4q3FIo
    type: "visual", 
    cost: 4000, 
    dps: 35, 
    unlockAt: 1800, 
    flavorText: "Watch ASMR soap videos. +35 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    id: 18, 
    name: "Minecraft", // Adds Minecraft visuals/audio from YouTube
    type: "visual", 
    cost: 6000, 
    dps: 50, 
    unlockAt: 2500, 
    flavorText: "Watch a let's play. +50 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    id: 19, 
    name: "Screen Time", // Unlocks the 'Screen Time' menu (for tracking stats)
    type: "visual", 
    cost: 7500, 
    dps: 0, 
    unlockAt: 3000, 
    flavorText: "Manage your screen habits", 
    maxOwned: 1, 
  },
  { 
    // RECONSIDER WHETHER THIS IS WORTH IT TO STAY WITHIN SCOPE
    id: 20, 
    name: "Levels", // Enables leveling / experience mechanics, which yield bonus stimulation when leveling up
    type: "visual", 
    cost: 8000, 
    dps: 0, 
    unlockAt: 3500, 
    flavorText: "Gain experience and level up",
    maxOwned: 1, 
  },
  {
    id: 21,
    name: "DVD Speed I", // Increase DVD speed by 1x
    type: "visual",
    cost: 7000,
    dps: 0,
    unlockAt: 2750,
    flavorText: "Double the speed of your DVDs",
    maxOwned: 1,
  },
  { 
    id: 22, 
    name: "True Crime Podcast", // Adds a true crime podcast audio/visual feed
    type: "visual", 
    cost: 10000, 
    dps: 100, 
    unlockAt: 4000, 
    flavorText: "Listen to a murder. Just like Mørkeland. +100 dopamine per second.", 
    maxOwned: 1, 
  },
  { 
    id: 23, 
    name: "Keyboard ASMR", 
    type: "visual", 
    cost: 15000, 
    dps: 0, 
    unlockAt: 6000, 
    flavorText: "Listen to keyboard sounds while you click. Satisfying. ", 
    maxOwned: 1, 
  },
  { 
    id: 24, 
    name: "Corner Hits", // Makes DVD logos hitting corners give extra stimulation (×10)
    type: "visual", 
    cost: 15000, 
    dps: 0, 
    unlockAt: 6500, 
    flavorText: "DVD corner hits give 10x dopamine", 
    maxOwned: 1, 
  },
  { 
    id: 25, 
    name: "UI Upgrade", // Adds more UI customization (colored news banner, buttons get a shadow, increased colors)
    type: "visual", 
    cost: 15000, 
    dps: 0, 
    unlockAt: 7000, 
    flavorText: "Bright colors. More gradients.", 
    maxOwned: 1, 
  },
  { 
    // RECONSIDER WHETHER THIS IS WORTH IT TO STAY WITHIN SCOPE
    id: 26, 
    name: "Item Shop", // Unlocks the item shop (buttons, cursors, trails, etc.)
    type: "visual", 
    cost: 17500, 
    dps: 0, 
    unlockAt: 8000, 
    flavorText: "", 
    maxOwned: 1, 
  },
  { 
    id: 27, 
    name: "Loot Boxes", // Adds loot boxes that spawn; opening them gives math.random() dopamine between 400-1500
    type: "visual", 
    cost: 20000, 
    dps: 0, 
    unlockAt: 10000, 
    flavorText: "Surprise mechanics for extra dopamine", 
    maxOwned: 1, 
  },
  { 
    id: 28, 
    name: "Button Upgrade II", // Further upgrade: each click gives 1% of current DPS
    type: "visual", 
    cost: 25000, 
    dps: 0, 
    unlockAt: 12000, 
    flavorText: "Each click gives you 1% of your DPS", 
    maxOwned: 1, 
  },
  { 
    id: 29, 
    name: "Meditation", // Adds meditation visuals/audio
    type: "visual", 
    cost: 35000, 
    dps: 100, 
    unlockAt: 18000, 
    flavorText: "Help relax your mind. +100 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    id: 30, 
    name: "Meditation ×2", // Doubles meditation yield / speeds it up
    type: "visual", 
    cost: 60000, 
    dps: 100, 
    unlockAt: 30000, 
    flavorText: "Meditate twice as fast. +100 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    id: 31, 
    name: "Subway Surfers Unmuted", // Unmute the Subway Surfers visuals (adds audio)
    type: "visual", 
    cost: 50000, 
    dps: 150, 
    unlockAt: 25000, 
    flavorText: "150 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    // RECONSIDER WHETHER THIS IS WORTH IT TO STAY WITHIN SCOPE
    id: 32, 
    name: "Email", // Unlocks an 'Inbox' / email system OR a phone-like notification system
    type: "visual", 
    cost: 60000, 
    dps: 0, 
    unlockAt: 35000, 
    flavorText: "Take a break and check your inbox", 
    maxOwned: 1, 
  },
  { 
    id: 33, 
    name: "Fitness Instructor", // Adds fitness/trainer visuals/audio from YouTube video
    type: "visual", 
    cost: 75000, 
    dps: 100, 
    unlockAt: 40000, 
    flavorText: "Get fit with your screen to stay motivated. +100 dopamine per second", 
    maxOwned: 1, 
  },
  { 
    id: 34, 
    name: "Vines", // Adds Vine visuals/audio from YouTube video
    type: "visual", 
    cost: 100000, 
    dps: 0, 
    unlockAt: 50000, 
    flavorText: "Reminisce the good old days when Vine was a thing", 
    maxOwned: 1, 
  },
  { 
    id: 35, 
    name: "Reaction Streamer", // Adds a streamer visual/audio feed
    type: "visual", 
    cost: 100000, 
    dps: 200, 
    unlockAt: 55000, 
    flavorText: "A friend in the chaos. +200 dopamine per second", 
    maxOwned: 1, 
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
  },
  { 
    id: 39, 
    name: "Dopamine overload.. or overstimulation?", // Screen Inversion or Fractal Expansion?? Everything gets wobbly
    type: "visual", 
    cost: 900000, 
    dps: 1000, 
    unlockAt: 500000, 
    flavorText: "A new perspective on reality. +1000 dopamine per second", 
    maxOwned: 1, 
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