function postRegistration(data) {
  console.log("Sending data...", data);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 2000);
  });
}

const form = document.getElementById("regForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = {
    name: form.name.value,
    email: form.email.value,
    event: form.event.value,
  };

  try {
    const response = await postRegistration(formData);
    if (response.success) {
      alert("Registration successful!");
    } else {
      alert("Registration failed.");
    }
  } catch (error) {
    alert("Error submitting registration.");
  }
});
