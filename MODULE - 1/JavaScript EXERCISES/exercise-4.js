function addEvent(events, event) {
  events.push(event);
  console.log(`Added event: ${event.name}`);
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log(`User registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    console.log("No seats left");
  }
}

function filterEventsByCategory(events, category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}

// Closure to track registrations by category
function registrationTracker() {
  const counts = {};
  return function(category) {
    counts[category] = (counts[category] || 0) + 1;
    return counts[category];
  };
}

const trackCategoryRegs = registrationTracker();

const events = [
  { name: "Baking Workshop", category: "Cooking", seats: 5 },
  { name: "Jazz Concert", category: "Music", seats: 15 },
];

// Usage
addEvent(events, { name: "Chess Tournament", category: "Games", seats: 10 });

filterEventsByCategory(events, "Music", (filteredEvents) => {
  console.log("Filtered Music Events:", filteredEvents);
});

registerUser(events[0]);
console.log("Registrations in Cooking:", trackCategoryRegs("Cooking"));
registerUser(events[0]);
console.log("Registrations in Cooking:", trackCategoryRegs("Cooking"));
