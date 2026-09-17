const starfield = document.getElementById("starfield");
const starCount = window.innerWidth < 700 ? 90 : 180;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  const size = Math.random() < .92 ? 1 : 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.setProperty("--d", `${2 + Math.random() * 5}s`);
  star.style.animationDelay = `${Math.random() * 5}s`;
  starfield.appendChild(star);
}

const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const reveals = document.querySelectorAll(".section, .research-card, .project-card, .timeline-item");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity: 0, transform: "translateY(20px)"}, {opacity: 1, transform: "translateY(0)"}],
        {duration: 650, easing: "cubic-bezier(.2,.7,.2,1)", fill: "forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.08});

reveals.forEach(el => observer.observe(el));
