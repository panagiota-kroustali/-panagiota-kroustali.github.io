const themeButton = document.getElementById("theme-toggle");
themeButton.textContent = "☀️";

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  themeButton.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();
