const sidebar = document.getElementById("sidebar");
const sidebarElements = sidebar.querySelectorAll("a");
function openSidebar() {
  sidebar.classList.add("active");
}

function closeSidebar() {
  sidebar.classList.remove("active");
}

sidebarElements.forEach((e) => {
  e.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
