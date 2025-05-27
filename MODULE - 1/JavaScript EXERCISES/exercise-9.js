const spinner = document.createElement("div");
spinner.textContent = "Loading...";
document.body.appendChild(spinner);

function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Music Fest", date: "2025-06-20" },
        { name: "Art Fair", date: "2025-07-10" },
      ]);
    }, 2000);
  });
}

// Using .then()
fetchEvents()
  .then(events => {
    spinner.remove();
    console.log("Events fetched (then):", events);
  })
  .catch(err => {
    spinner.remove();
    console.error("Error fetching:", err);
  });

// Using async/await with spinner
async function getEvents() {
  try {
    const events = await fetchEvents();
    console.log("Events fetched (async/await):", events);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    spinner.remove();
  }
}

getEvents();
