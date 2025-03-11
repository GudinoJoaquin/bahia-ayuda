const menu = document.getElementById("menu");
const toggleButton = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");

toggleButton.addEventListener("click", () => {
  const isOpen = menu.style.top === "0px";

  if (isOpen) {
    menu.style.top = "-100%";
    menu.classList.add("hidden");
    menuIcon.setAttribute("color", "white"); // Color original
  } else {
    menu.style.top = "0px";
    menu.classList.remove("hidden");
    menu.classList.add("absolute");
  }
});
