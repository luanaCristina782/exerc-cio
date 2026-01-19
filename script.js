const button = document.getElementById("theme-toggle");
const body = document.body;
const icon = button.querySelector("i");

// Tema inicial claro
body.classList.add("light-theme");

button.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  } else {
    icon.classList.replace("bi-sun-fill", "bi-moon-fill");
  }
});
