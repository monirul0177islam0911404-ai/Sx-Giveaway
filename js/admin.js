auth.onAuthStateChanged(user => {
  if (!user || user.email !== "monirul0177islam0911404@gmail.com") {
    alert("Access denied");
    window.location.href = "login.html";
  }
});
