const events = [
  { name: "Baking Workshop", category: "Cooking" },
  { name: "Jazz Concert", category: "Music" },
  { name: "Salsa Night", category: "Dance" },
];

// Add new event
events.push({ name: "Rock Festival", category: "Music" });

// Filter music events
const musicEvents = events.filter(e => e.category === "Music");

// Map to display format
const displayCards = musicEvents.map(e => `🎵 ${e.name}`);

console.log("Music Events Cards:", displayCards);
