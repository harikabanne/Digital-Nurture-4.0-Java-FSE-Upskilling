const events = [
    { name: "Music Fest", date: "2025-06-20", seats: 10 },
    { name: "Food Expo", date: "2024-12-01", seats: 0 },
    { name: "Art Workshop", date: "2025-07-15", seats: 5 },
];

// Get current date for comparison
const today = new Date();

function isUpcoming(eventDate) {
    return new Date(eventDate) >= today;
}

function displayValidEvents(events) {
    console.log("Upcoming Events with Seats Available:");

    events.forEach(event => {
        if (isUpcoming(event.date) && event.seats > 0) {
            console.log(`- ${event.name} on ${event.date} (${event.seats} seats available)`);
        }
    });
}

function registerUser(event) {
    try {
        if (!isUpcoming(event.date)) {
            throw new Error("Event has already passed.");
        }
        if (event.seats <= 0) {
            throw new Error("No seats available.");
        }
        event.seats--;
        console.log(`Registration successful for ${event.name}. Seats left: ${event.seats}`);
    } catch (error) {
        console.error(`Registration failed: ${error.message}`);
    }
}

// Display valid events
displayValidEvents(events);

// Try registering for Food Expo (should fail)
registerUser(events[1]);

// Register for Music Fest (should succeed)
registerUser(events[0]);
