// Add console logs to check flow
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("Form submission started");

  const payload = {
    name: form.name.value,
    email: form.email.value,
    event: form.event.value,
  };
  console.log("Payload prepared:", payload);

  try {
    const response = await postRegistration(payload);
    console.log("Response received:", response);
    if (response.success) {
      console.log("Registration success");
      alert("Registration successful!");
    } else {
      console.error("Registration failed");
      alert("Registration failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
