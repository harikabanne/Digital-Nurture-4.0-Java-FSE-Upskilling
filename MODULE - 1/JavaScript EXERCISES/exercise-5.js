function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const event1 = new Event("Marathon", "2025-09-10", 50);

console.log(event1.name);
console.log("Available?", event1.checkAvailability());

console.log("Event keys & values:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
