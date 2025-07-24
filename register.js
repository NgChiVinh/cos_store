// Hàm lưu user vào localStorage
function registerUser(name, email, password) {
  const user = { name, email, password };
  localStorage.setItem("cosUser", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", "true");
}

// Gắn sự kiện khi submit form đăng ký
document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu xác nhận không khớp.");
    return;
  }

  registerUser(name, email, password);
  alert("Đăng ký thành công! Bạn sẽ được chuyển đến trang chủ.");
  window.location.href = "home.html"; // Hoặc chuyển sang login.html nếu muốn
});
