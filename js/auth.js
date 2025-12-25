function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 8) {
    alert("Password minimum 8 characters");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}
