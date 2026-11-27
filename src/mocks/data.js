// SAMPLE DATA ONLY – replace with real API responses (see README). Never show as live data.
export const navLinks = [
  { label: "Home", href: "#" }, { label: "Market", href: "#market" },
  { label: "Farming", href: "#advisory" }, { label: "Schemes", href: "#schemes" },
  { label: "Marketplace", href: "#marketplace" }, { label: "Tools", href: "#" },
  { label: "Knowledge", href: "#advisory" }, { label: "Community", href: "#community" },
];

export const slides = [
  { title: "Better farming starts with better information.", text: "Market prices, crop guidance, government schemes and farm tools in one place.", cta: "Explore platform", from: "from-brand-900", to: "to-brand-600" },
  { title: "Know today's mandi price before you sell.", text: "Compare minimum, maximum and modal prices across markets near you.", cta: "See market prices", from: "from-[#5a3a12]", to: "to-harvest" },
  { title: "Find schemes you are eligible for.", text: "PM-KISAN, crop insurance, Kisan Credit Card and more, explained simply.", cta: "Browse schemes", from: "from-[#0f4c5c]", to: "to-brand-600" },
];

export const quickActions = [
  { label: "Market Prices", icon: "TrendingUp" }, { label: "Crop Advisory", icon: "Sprout" },
  { label: "Govt Schemes", icon: "Landmark" }, { label: "Farm Tools", icon: "Calculator" },
  { label: "Buy / Sell", icon: "ShoppingCart" }, { label: "My Farm", icon: "Tractor" },
  { label: "Ask an Expert", icon: "Users" }, { label: "Weather", icon: "CloudSun" },
];

export const stats = [
  { label: "Districts covered", value: "—" }, { label: "Major crop", value: "Paddy" },
  { label: "Season", value: "Rabi" },
];

export const prices = [
  { crop: "Paddy (Common)", min: 2180, max: 2420, modal: 2310, change: 1.2 },
  { crop: "Turmeric", min: 13200, max: 15800, modal: 14500, change: 2.8 },
  { crop: "Dry Chilli", min: 16000, max: 18400, modal: 17200, change: -0.6 },
  { crop: "Groundnut", min: 9999, max: 9999, modal: 7900, change: 1.5 },
];

export const weather = {
  temp: 28, condition: "Partly Cloudy", feels: 30, humidity: 72, wind: 12,
  alert: "Light rain expected in next 2 days. Plan irrigation and fertilizer accordingly.",
  forecast: [
    { day: "Tue", hi: 32, lo: 24 }, { day: "Wed", hi: 31, lo: 24 }, { day: "Thu", hi: 30, lo: 23 },
    { day: "Fri", hi: 29, lo: 23 }, { day: "Sat", hi: 31, lo: 24 },
  ],
};

export const schemes = [
  { name: "PM-KISAN", desc: "₹6,000/year income support", status: "Ongoing" },
  { name: "PMFBY (Crop Insurance)", desc: "Crop loss protection & compensation", status: "Apply Now" },
  { name: "KCC (Kisan Credit Card)", desc: "Easy credit for farming needs", status: "Ongoing" },
];

export const articles = [
  { title: "Paddy Cultivation Guide (TN Conditions)", tag: "Crop Guides", read: 7 },
  { title: "Leaf Folder in Paddy: Identification & Control", tag: "Pest & Disease", read: 5 },
  { title: "Nutrient Management for Higher Yield", tag: "Best Practices", read: 6 },
];

export const products = [
  { name: "Hybrid Paddy Seeds", note: "High yield • TN varieties", emoji: "🌾", price: 480, rating: 4.5 },
  { name: "Tractor (45 HP)", note: "New & Used", emoji: "🚜", price: null, rating: 4.2 },
  { name: "Drip Irrigation Kit", note: "For 1–5 acres", emoji: "💧", price: 6500, rating: 4.4 },
  { name: "Bio Fertilizer", note: "Organic • 1 L", emoji: "🧴", price: 320, rating: 4.1 },
];

export const questions = [
  { q: "What is the best fertiliser schedule for paddy in Thanjavur?", answers: 12, ago: "2 hours ago" },
  { q: "How to control stem borer in rice?", answers: 8, ago: "5 hours ago" },
];

export const quickLinks = ["Agmarknet prices", "PM-KISAN portal", "Soil health card", "Kisan call centre"];
