// Validasi Login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "ancisras" && password === "123") {
      alert("Login berhasil!");
      window.location.href = "web.html";
    } else {
      alert("Username atau password salah!");
    }
  });

// Validasi Form Kontak
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var message = document.getElementById("message").value;
    if (message === "") {
      alert("Pesan tidak boleh kosong!");
      event.preventDefault();
    }
  });
