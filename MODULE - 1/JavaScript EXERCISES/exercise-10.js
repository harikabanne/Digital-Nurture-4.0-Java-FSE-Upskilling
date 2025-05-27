const defaultCategory = "General";

function createEvent(name, date = "2025-01-01", category = defaultCategory) {
  const event = { name, date, category };
  const { name: eventName, date: eventDate } = event;  // destructuring
  const clonedEvent = { ...event };
  console.log(`Created event: ${eventName} on ${eventDate}, category: ${category}`);
  return clonedEvent;
}

const newEvent = createEvent("Spring Festival");
console.log(newEvent);
