// Define event details
const eventName = "Community Cleanup";
const eventDate = "2025-06-30";
let seatsAvailable = 25;

// Display event info using template literals
console.log(`Event: ${eventName} on ${eventDate} - Seats Available: ${seatsAvailable}`);

// Simulate a registration (seat count decreases)
function registerSeat() {
    if (seatsAvailable > 0) {
        seatsAvailable--;
        console.log(`Seat registered. Seats left: ${seatsAvailable}`);
    } else {
        console.log("No seats available.");
    }
}

// Test registration
registerSeat();  // Seats left 24
registerSeat();  // Seats left 23
