function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  // Reset feedback
  feedback.innerHTML = "";
  feedback.style.color = "red";

  if (name === "" || email === "" || message === "") {
    feedback.innerHTML = "Please fill in all fields.";
    return false;
  }

  // ✅ Corrected regex (NO double backslashes!)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.innerHTML = "Please enter a valid email address.";
    return false;
  }

  feedback.style.color = "green";
  feedback.innerHTML = "Form submitted successfully!";
  return false; // Prevent form from refreshing the page
}
