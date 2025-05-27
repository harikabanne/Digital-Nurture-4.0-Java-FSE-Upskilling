const events = [
  { name: "Baking Workshop", date: "2025-07-10", seats: 5 },
  { name: "Jazz Concert", date: "2025-08-20", seats: 15 },
];

const container = document.querySelector("#eventsContainer");

function renderEvents() {
  container.innerHTML = ""; // clear
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p><p>Seats: ${event.seats}</p>`;
    container.appendChild(card);
  });
}

renderEvents();
