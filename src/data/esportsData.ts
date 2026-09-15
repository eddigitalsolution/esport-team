import { AVATARS } from './playerAvatars';

export interface Player {
  id: string;
  name: string;
  alias: string;
  role: string;
  roleShort: string;
  avatar: string;
  heroImage: string;
  signatureHeroes: string[];
  lastHits: string;
  netWorth: string;
  winRate: string;
  kda: string;
  matchesPlayed: number;
  bio: string;
}

export interface Match {
  id: number;
  opponent: string;
  opponentLogo: string;
  result: 'WIN' | 'LOSS';
  score: string;
  mapType: string;
  date: string;
  tournament: string;
  category: 'REGIONAL' | 'INTERNATIONAL';
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  avatar: string;
  experience: string;
}

export interface UpcomingMatch {
  id: string;
  opponent: string;
  opponentLogo: string;
  tournament: string;
  time: string;
  date: string;
  streamUrl: string;
}

export const PLAYERS_DATA: Player[] = [
  {
    id: 'dendi',
    name: "Danil Ishutin",
    alias: "DENDI",
    role: "MID LANER",
    roleShort: "MID",
    avatar: AVATARS.dendi,
    heroImage: AVATARS.dendiHero,
    signatureHeroes: ["Pudge", "Invoker", "Templar Assassin", "Puck", "Shadow Fiend"],
    lastHits: "14.5 / min",
    netWorth: "18.2K",
    winRate: "68.4%",
    kda: "4.82",
    matchesPlayed: 1420,
    bio: "The legendary Mid Laner of Natus Vincere, world renowned for his incredible reflexes, signature Pudge plays, and iconic hook combos at The International."
  },
  {
    id: 'kuroky',
    name: "Kuro Salehi Takhasomi",
    alias: "KUROKY",
    role: "IN-GAME LEADER / SUPPORT",
    roleShort: "IGL",
    avatar: AVATARS.kuroky,
    heroImage: AVATARS.kurokyHero,
    signatureHeroes: ["Rubick", "Keeper of the Light", "Visage", "Io"],
    lastHits: "4.2 / min",
    netWorth: "9.5K",
    winRate: "65.1%",
    kda: "3.95",
    matchesPlayed: 1350,
    bio: "Master strategist and world-class support player known for drafting supremacy and unmatched vision control."
  },
  {
    id: 'puppey',
    name: "Clement Ivanov",
    alias: "PUPPEY",
    role: "CAPTAIN / SUPPORT",
    roleShort: "CAPTAIN/SUPPORT",
    avatar: AVATARS.puppey,
    heroImage: AVATARS.puppeyHero,
    signatureHeroes: ["Chen", "Enchantress", "Lycan", "Enigma"],
    lastHits: "6.8 / min",
    netWorth: "11.1K",
    winRate: "67.8%",
    kda: "4.12",
    matchesPlayed: 1580,
    bio: "The mastermind captain who led Na'Vi to victory at The International 2011, renowned for micro-management of junglers."
  },
  {
    id: 'xboct',
    name: "Alexander Dashkevich",
    alias: "XBOCT",
    role: "CARRY / MID",
    roleShort: "NA'VI",
    avatar: AVATARS.xboct,
    heroImage: AVATARS.xboctHero,
    signatureHeroes: ["Lifestealer", "Alchemist", "Gyrocopter", "Weaver"],
    lastHits: "16.1 / min",
    netWorth: "21.4K",
    winRate: "64.2%",
    kda: "4.35",
    matchesPlayed: 1290,
    bio: "Aggressive carry player famous for high-risk, game-winning dives and high-economy farming runs."
  },
  {
    id: 'funn1k',
    name: "Gleb Lipatnikov",
    alias: "FUNN1K",
    role: "OFFLANER / MID",
    roleShort: "NA'VI",
    avatar: AVATARS.funn1k,
    heroImage: AVATARS.funn1kHero,
    signatureHeroes: ["Bounty Hunter", "Dark Seer", "Clinkz", "Batrider"],
    lastHits: "11.4 / min",
    netWorth: "14.8K",
    winRate: "63.9%",
    kda: "3.88",
    matchesPlayed: 1150,
    bio: "Fierce offlaner capable of creating massive space on the map and initiating decisive teamfights."
  }
];

export const LATEST_MATCHES: Match[] = [
  { id: 1, opponent: "Alliance", opponentLogo: "🛡️", result: "WIN", score: "2-1", mapType: "BO3", date: "DEC 18, 2021", tournament: "DPC WEU Division 1", category: "REGIONAL" },
  { id: 2, opponent: "Team Liquid", opponentLogo: "💧", result: "WIN", score: "2-1", mapType: "BO3", date: "DEC 10, 2021", tournament: "DPC WEU Division 1", category: "REGIONAL" },
  { id: 3, opponent: "OG", opponentLogo: "🌻", result: "WIN", score: "1-1", mapType: "-", date: "OCT 19, 2021", tournament: "The International 10", category: "INTERNATIONAL" },
  { id: 4, opponent: "Alliance", opponentLogo: "🛡️", result: "LOSS", score: "0-2", mapType: "BO3", date: "OCT 22, 2021", tournament: "The International 10", category: "INTERNATIONAL" },
  { id: 5, opponent: "Team Liquid", opponentLogo: "💧", result: "LOSS", score: "1-2", mapType: "BO3", date: "OCT 12, 2021", tournament: "ESL One Fall", category: "REGIONAL" },
  { id: 6, opponent: "Alliance", opponentLogo: "🛡️", result: "LOSS", score: "0-2", mapType: "BO3", date: "OCT 23, 2021", tournament: "ESL One Fall", category: "REGIONAL" },
  { id: 7, opponent: "OG", opponentLogo: "🌻", result: "WIN", score: "2-1", mapType: "BO3", date: "OCT 23, 2021", tournament: "ESL One Fall", category: "REGIONAL" },
  { id: 8, opponent: "Team Liquid", opponentLogo: "💧", result: "LOSS", score: "1-2", mapType: "BO3", date: "OCT 31, 2021", tournament: "Dota Pit League", category: "INTERNATIONAL" }
];

export const STAFF_MEMBERS: Staff[] = [
  {
    id: 'coach-v',
    name: "Sarah 'Coach V' Chen",
    role: "HEAD COACH",
    avatar: AVATARS.coachV,
    experience: "7+ Years Tier 1 Coaching"
  },
  {
    id: 'meta-wang',
    name: "Mike 'Meta' Wang",
    role: "LEAD ANALYST",
    avatar: AVATARS.metaWang,
    experience: "Draft & Statistical Modeling Expert"
  }
];

export const UPCOMING_MATCHES: UpcomingMatch[] = [
  {
    id: 'up-1',
    opponent: "OG",
    opponentLogo: "🌻",
    tournament: "DPC Major Qualifiers",
    time: "18:00 CEST",
    date: "TOMORROW",
    streamUrl: "https://twitch.tv/dota2ti"
  },
  {
    id: 'up-2',
    opponent: "Team Spirit",
    opponentLogo: "🐉",
    tournament: "Riyadh Masters 2026",
    time: "21:30 CEST",
    date: "SEP 28",
    streamUrl: "https://twitch.tv/dota2ti"
  }
];

export const REPLAY_CLIPS = [
  {
    id: 'replay-1',
    title: "Dendi Pudge Fountain Hook vs TongFu (TI3)",
    duration: "03:45",
    views: "2.4M Views",
    thumbnail: AVATARS.dendiHero,
    description: "The most iconic strategic hook play in Dota 2 history. Dendi & Puppey combine Pudge Hook with Chen Teleportation."
  },
  {
    id: 'replay-2',
    title: "The Play - Na'Vi vs LGD Gaming (TI2)",
    duration: "04:12",
    views: "3.8M Views",
    thumbnail: AVATARS.dendi,
    description: "LightofHeaven BKB Black Hole & Dendi Rubick Ravage Steal turn around a massive 5-man Naga Siren initiation."
  },
  {
    id: 'replay-3',
    title: "Dendi Invoker Sunstrike Rampage",
    duration: "02:18",
    views: "1.1M Views",
    thumbnail: AVATARS.dendiHero,
    description: "Flawless spell invocation and map prediction securing a full teamwipe in DPC Finals."
  }
];
