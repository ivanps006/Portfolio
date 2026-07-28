// Año automático en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Cerrar menú al hacer click en un link (móvil)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Render de proyectos
const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <div class="project-content">
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
        <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(card);
});