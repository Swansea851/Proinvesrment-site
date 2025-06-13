 // Auto-fill referral code from URL
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get("ref");

  if (refCode) {
    document.getElementById("referral").value = refCode;
  }

  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const referral = document.getElementById("referral").value.trim();

    if (!fullName || !email || !password) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate registration (replace with backend/API call)
    console.log("User Registered:", {
      fullName,
      email,
      password,
      referral,
    });

    alert("Registration successful!");
    form.reset();
  });
});
