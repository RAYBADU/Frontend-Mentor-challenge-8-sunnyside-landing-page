const hamBtn = document.getElementById("ham-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

hamBtn.addEventListener("click", () => {
  menu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
});
