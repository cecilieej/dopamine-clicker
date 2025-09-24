// Achievement system -- TODO: Refine all achievements and their requirements
// Structure: {id, name, description, requirement, unlocked, claimed, reward}

export const achievementsData = [
  {
    id: 1,
    name: "Completionist",
    description: "Unlock all other achievements",
    requirement: { type: "allAchievements", value: "all" },
    unlocked: false,
    claimed: false,
    reward: 10000
  },
  {
    id: 2,
    name: "Tunnel Vision",
    description: "Unlock the wormhole (buy the Subway Surfers Wormhole upgrade)",
    requirement: { type: "specificUpgrade", value: 47 },
    unlocked: false,
    claimed: false,
    reward: 2500
  },
  {
    id: 3,
    name: "Polyglot",
    description: "Correctly answer all Duolingo questions (cannot miss any)",
    requirement: { type: "duolingoPercent", value: 100 },
    unlocked: false,
    claimed: false,
    reward: 5000
  },
  {
    id: 4,
    name: "Shopaholic",
    description: "Purchase every cosmetic in the item shop",
    requirement: { type: "allCosmetics", value: "all" },
    unlocked: false,
    claimed: false,
    reward: 3000
  },
  {
    id: 5,
    name: "Maxed Out",
    description: "Reach level 50",
    requirement: { type: "level", value: 50 },
    unlocked: false,
    claimed: false,
    reward: 2000
  },
  {
    id: 6,
    name: "iPad Kid",
    description: "Generate 1,000,000 stimulation (total)",
    requirement: { type: "totalDopamine", value: 1000000 },
    unlocked: false,
    claimed: false,
    reward: 1500
  },
  {
    id: 7,
    name: "M'Lady",
    description: "Tip your fedora (buy the fedora item)",
    requirement: { type: "specificItem", value: "fedora" },
    unlocked: false,
    claimed: false,
    reward: 500
  },
  {
    id: 8,
    name: "Decked Out",
    description: "Purchase all upgrades (except Duolingo / Touch Grass)",
    requirement: { type: "upgradesExcept", excludeIds: [30, 99] },
    unlocked: false,
    claimed: false,
    reward: 5000
  },
  {
    id: 9,
    name: "Hunter",
    description: "Unlock 15 achievements",
    requirement: { type: "achievementsUnlocked", value: 15 },
    unlocked: false,
    claimed: false,
    reward: 1000
  },
  {
    id: 10,
    name: "Click Commander",
    description: "Click the button 1,000 times",
    requirement: { type: "totalClicks", value: 1000 },
    unlocked: false,
    claimed: false,
    reward: 300
  },
  {
    id: 11,
    name: "Tube Rider",
    description: "Unlock fullscreen Subway Surfers (buy the fullscreen upgrade)",
    requirement: { type: "specificUpgrade", value: 42 },
    unlocked: false,
    claimed: false,
    reward: 1000
  },
  {
    id: 12,
    name: "Corner Hunter",
    description: "Reach 100 DVD corner hits (DVD logos hitting window corners)",
    requirement: { type: "cornerHits", value: 100 },
    unlocked: false,
    claimed: false,
    reward: 800
  },
  {
    id: 13,
    name: "Loot Hoarder",
    description: "Open 25 lootboxes",
    requirement: { type: "lootboxesOpened", value: 25 },
    unlocked: false,
    claimed: false,
    reward: 750
  },
  {
    id: 14,
    name: "Roaring Kitty",
    description: "Make 100,000 stimulation from stocks (via stock market profit)",
    requirement: { type: "stockProfit", value: 100000 },
    unlocked: false,
    claimed: false,
    reward: 2000
  },
  {
    id: 15,
    name: "Click Corporal",
    description: "Click the button 500 times",
    requirement: { type: "totalClicks", value: 500 },
    unlocked: false,
    claimed: false,
    reward: 150
  },
  {
    id: 16,
    name: "Leveler",
    description: "Reach level 25",
    requirement: { type: "level", value: 25 },
    unlocked: false,
    claimed: false,
    reward: 800
  },
  {
    id: 17,
    name: "Casual Shopper",
    description: "Purchase a cosmetic (any)",
    requirement: { type: "cosmeticsPurchased", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 100
  },
  {
    id: 18,
    name: "Cursor Collector",
    description: "Buy a custom cursor in the shop",
    requirement: { type: "specificItem", value: "cursor" },
    unlocked: false,
    claimed: false,
    reward: 200
  },
  {
    id: 19,
    name: "Owl Scholar",
    description: "Correctly answer 10 Duolingo questions",
    requirement: { type: "duolingoCorrect", value: 10 },
    unlocked: false,
    claimed: false,
    reward: 300
  },
  {
    id: 20,
    name: "Day Trader",
    description: "Sell a stock for profit (i.e. sell higher than buy)",
    requirement: { type: "stockProfitTrade", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 500
  },
  {
    id: 21,
    name: "Gambler",
    description: "Sell a stock for a loss (sell lower than buy)",
    requirement: { type: "stockLossTrade", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 250
  },
  {
    id: 22,
    name: "Loot Finder",
    description: "Open a lootbox",
    requirement: { type: "lootboxesOpened", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 100
  },
  {
    id: 23,
    name: "Hoot Hoot",
    description: "Activate Duolingo answers — buy the Duolingo upgrade",
    requirement: { type: "specificUpgrade", value: 30 },
    unlocked: false,
    claimed: false,
    reward: 400
  },
  {
    id: 24,
    name: "Achievements",
    description: "Unlock the achievements feature (buy Achievements upgrade)",
    requirement: { type: "specificUpgrade", value: 14 },
    unlocked: false,
    claimed: false,
    reward: 200
  },
  {
    id: 25,
    name: "Click Cadet",
    description: "Click the button 100 times",
    requirement: { type: "totalClicks", value: 100 },
    unlocked: false,
    claimed: false,
    reward: 50
  },
  {
    id: 26,
    name: "Procrastinator",
    description: "Generate 100,000 stimulation in total",
    requirement: { type: "totalDopamine", value: 100000 },
    unlocked: false,
    claimed: false,
    reward: 500
  },
  {
    id: 27,
    name: "Commuter",
    description: "Watch 10 minutes of Subway Surfers (have the Subway visuals active for 10 minutes)",
    requirement: { type: "subwaySurfersTime", value: 600 },
    unlocked: false,
    claimed: false,
    reward: 300
  },
  {
    id: 28,
    name: "Fixer Upper",
    description: "Purchase 15 upgrades",
    requirement: { type: "upgradesPurchased", value: 15 },
    unlocked: false,
    claimed: false,
    reward: 400
  },
  {
    id: 29,
    name: "Good Grandchild",
    description: "Reply to grandma's email (after unlocking Email/Inbox)",
    requirement: { type: "emailReply", value: "grandma" },
    unlocked: false,
    claimed: false,
    reward: 300
  },
  {
    id: 30,
    name: "Kinder Surprise",
    description: "Open a kinder egg (an egg dropped by Paul the chicken, once Tamagotchi is unlocked)",
    requirement: { type: "kinderEgg", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 400
  },
  {
    id: 31,
    name: "Chicken Tendies",
    description: "Feed Paul the chicken (click feed when he is hungry)",
    requirement: { type: "feedChicken", value: 1 },
    unlocked: false,
    claimed: false,
    reward: 250
  },
  {
    id: 32,
    name: "Level Up",
    description: "Reach level 10",
    requirement: { type: "level", value: 10 },
    unlocked: false,
    claimed: false,
    reward: 200
  },
  {
    id: 33,
    name: "Disc Collector",
    description: "Buy 5 DVD logos (i.e. purchase the Bouncing DVD upgrade 5 times)",
    requirement: { type: "specificUpgradeCount", upgradeId: 1, value: 5 },
    unlocked: false,
    claimed: false,
    reward: 150
  },
  {
    id: 34,
    name: "Healthy Habits",
    description: "Unlock Screen Time (buy the Screen Time upgrade)",
    requirement: { type: "specificUpgrade", value: 20 },
    unlocked: false,
    claimed: false,
    reward: 300
  },
  {
    id: 35,
    name: "Night Owl",
    description: "Play at night (i.e. play between 7:00 PM and 6:30 AM)",
    requirement: { type: "timeOfDay", startHour: 19, endHour: 6.5 },
    unlocked: false,
    claimed: false,
    reward: 200
  }
];

export default achievementsData;
