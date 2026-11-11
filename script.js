// ===== 1. Σκούρο / φωτεινό θέμα =====
const themeButton = document.getElementById("theme-toggle");

// Αν ο επισκέπτης είχε διαλέξει σκούρο θέμα την προηγούμενη φορά, το θυμόμαστε
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
  // toggle: αν υπάρχει η κλάση "dark" τη βγάζει, αν δεν υπάρχει τη βάζει
  const isDark = document.body.classList.toggle("dark");
  themeButton.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ===== 2. Μενού για κινητά =====
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Κλείνει το μενού όταν πατήσεις κάποιο link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ===== 3. Αυτόματη χρονιά στο footer =====
document.getElementById("year").textContent = new Date().getFullYear();
