const form = document.getElementById("regForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const { name, email, event: eventSelect } = form.elements;

  if (!name.value || !email.value || !eventSelect.value) {
    errorMsg.textContent = "Please fill out all fields correctly.";
    return;
  }
  errorMsg.textContent = "";

  console.log(`User Registered: ${name.value}, Email: ${email.value}, Event: ${eventSelect.value}`);
  alert("Registration successful!");
  form.reset();
});
