// Achievement system for dopamine clicker
// Structure: {id, name, description, requirement, type, unlocked, claimed}

export const achievementsData = [
  // Click-based achievements
  {
    id: 1,
    name: "First Hit",
    description: "Click for the first time",
    requirement: { type: "totalClicks", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 5
  },
  {
    id: 2,
    name: "Getting Started", 
    description: "Click 10 times",
    requirement: { type: "totalClicks", value: 10 },
    unlocked: false,
    claimed: false,
    reward: 10
  },
  {
    id: 3,
    name: "Clicking Addict",
    description: "Click 100 times", 
    requirement: { type: "totalClicks", value: 100 },
    unlocked: false,
    claimed: false,
    reward: 25
  },
  {
    id: 4,
    name: "Compulsive Clicker",
    description: "Click 1,000 times",
    requirement: { type: "totalClicks", value: 1000 },
    unlocked: false,
    claimed: false,
    reward: 100
  },

  // Dopamine-based achievements  
  {
    id: 10,
    name: "First Taste",
    description: "Reach 10 total dopamine",
    requirement: { type: "totalDopamine", value: 10 },
    unlocked: false,
    claimed: false,
    reward: 15
  },
  {
    id: 11,
    name: "Dopamine Hundred",
    description: "Reach 100 total dopamine",
    requirement: { type: "totalDopamine", value: 100 },
    unlocked: false,
    claimed: false,
    reward: 50
  },
  {
    id: 12,
    name: "Thousand High",
    description: "Reach 1,000 total dopamine", 
    requirement: { type: "totalDopamine", value: 1000 },
    unlocked: false,
    claimed: false,
    reward: 200
  },
  {
    id: 13,
    name: "Dopamine Millionaire",
    description: "Reach 1,000,000 total dopamine",
    requirement: { type: "totalDopamine", value: 1000000 },
    unlocked: false,
    claimed: false,
    reward: 10000
  },

  // DPS-based achievements
  {
    id: 20,
    name: "Passive Income", 
    description: "Reach 1 dopamine per second",
    requirement: { type: "currentDPS", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 25
  },
  {
    id: 21,
    name: "Automation Station",
    description: "Reach 10 dopamine per second",
    requirement: { type: "currentDPS", value: 10 },
    unlocked: false,
    claimed: false,
    reward: 100
  },
  {
    id: 22,
    name: "Dopamine Factory",
    description: "Reach 100 dopamine per second",
    requirement: { type: "currentDPS", value: 100 },
    unlocked: false,
    claimed: false,
    reward: 500
  },

  // Upgrade-based achievements
  {
    id: 30,
    name: "First Enhancement",
    description: "Purchase your first upgrade",
    requirement: { type: "upgradesPurchased", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 20
  },
  {
    id: 31,
    name: "Upgrade Enthusiast", 
    description: "Purchase 5 different upgrades",
    requirement: { type: "uniqueUpgrades", value: 5 },
    unlocked: false,
    claimed: false,
    reward: 75
  },
  {
    id: 32,
    name: "Completionist",
    description: "Unlock all visual upgrades", 
    requirement: { type: "visualUpgrades", value: "all" },
    unlocked: false,
    claimed: false,
    reward: 1000
  },

  // Time-based achievements
  {
    id: 40,
    name: "Dedicated User",
    description: "Play for 5 minutes straight",
    requirement: { type: "playTime", value: 300 }, // seconds
    unlocked: false,
    claimed: false,
    reward: 50
  },
  {
    id: 41,
    name: "Addiction Confirmed", 
    description: "Play for 30 minutes straight",
    requirement: { type: "playTime", value: 1800 },
    unlocked: false,
    claimed: false,
    reward: 250
  },

  // Special/Hidden achievements
  {
    id: 50,
    name: "Speed Demon",
    description: "Click 10 times in 1 second", 
    requirement: { type: "clicksPerSecond", value: 10 },
    unlocked: false,
    claimed: false,
    reward: 100
  },
  {
    id: 51,
    name: "Patient Zero",
    description: "Don't click for 30 seconds after starting",
    requirement: { type: "patience", value: 30 },
    unlocked: false,
    claimed: false,
    reward: 150
  },
  {
    id: 52,
    name: "The End?",
    description: "Purchase the 'Touch Grass' upgrade",
    requirement: { type: "specificUpgrade", value: 99 },
    unlocked: false,
    claimed: false,
    reward: 0 // No reward, it's the end!
  }
];

export default achievementsData;
