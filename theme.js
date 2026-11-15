// Chạy sớm ở <head> để không bị nháy màu. Mặc định là giao diện sáng.
(function () {
  var root = document.documentElement;
  try { if (localStorage.getItem("theme") === "dark") root.dataset.theme = "dark"; } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    function paint() { btn.textContent = root.dataset.theme === "dark" ? "☀️ Sáng" : "🌙 Tối"; }
    paint();
    btn.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      paint();
    });
  });
})();
