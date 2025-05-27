const events = [
  { name: "Baking Workshop", category: "Cooking", seats: 5 },
  { name: "Jazz Concert", category: "Music", seats: 15 },
];

const container = document.querySelector("#eventsContainer");
const filter = document.querySelector("#categoryFilter");

function renderEvents(filteredEvents) {
  container.innerHTML = "";
  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.innerHTML = `<h3>${event.name}</h3><p>Category: ${event.category}</p>
      <button onclick="register('${event.name}')">Register</button>`;
    container.appendChild(card);
  });
}

function register(eventName) {
  alert(`Registered for ${eventName}`);
}

filter.onchange = () => {
  const selected = filter.value;
  const filtered = selected ? events.filter(e => e.category === selected) : events;
  renderEvents(filtered);
};

// Initial render
renderEvents(events);

// Keydown search example (simplified)
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const searchTerm = prompt("Enter event name to search:");
    const found = events.filter(ev => ev.name.toLowerCase().includes(searchTerm.toLowerCase()));
    renderEvents(found);
  }
});
