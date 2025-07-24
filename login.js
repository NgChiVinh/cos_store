// Hàm đăng nhập
function loginUser(email, password) {
  const userStr = localStorage.getItem("cosUser");
  if (!userStr) {
    alert("Chưa có tài khoản. Vui lòng đăng ký.");
    return false;
  }

  const user = JSON.parse(userStr);
  if (user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Đăng nhập thành công!");
    window.location.href = "home.html"; // Chuyển đến trang chính sau đăng nhập
    return true;
  } else {
    alert("Sai email hoặc mật khẩu.");
    return false;
  }
}

// Sự kiện nút ĐĂNG NHẬP
document.querySelector(".login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  loginUser(email, password);
});

// Nút ĐĂNG KÝ chỉ chuyển trang (không xử lý đăng ký tại đây)
document.querySelector(".register-btn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "register.html";
});
