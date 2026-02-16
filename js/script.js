// HIDE PASSWORD //
function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// SIGNUP //
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let city = document.getElementById("city").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !phone || !city || !password || !confirmPassword) {
      alert("All fields are mandatory");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Invalid email format");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(city)) {
      alert("City must contain only letters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters with letters and numbers");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup Successful!");
    window.location.href = "Signin.html";
  });
}

// SIGNIN  //
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No registered user found");
      return;
    }

    if (email === storedUser.email && password === storedUser.password) {
      alert("Login Successful!");
      window.location.href = "travel.html";
    } else {
      alert("Invalid credentials");
    }
  });
}
