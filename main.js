// ===== Rotating word in the hero =====
const words = ["fresh", "bold", "cozy", "creamy", "made with love"];
const wordEl = document.getElementById("rotatingWord");
let wordIndex = 0;

if (wordEl) {
  setInterval(() => {
    wordEl.classList.add("out");
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      wordEl.textContent = words[wordIndex];
      wordEl.classList.remove("out");
    }, 400);
  }, 2500);
}

// ===== Navbar style, scroll progress and back-to-top =====
const navbar = document.getElementById("navbar");
const progress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

function onScroll() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  if (navbar) navbar.classList.toggle("scrolled", scrollTop > 40);
  if (progress) progress.style.width = (height > 0 ? (scrollTop / height) * 100 : 0) + "%";
  if (backToTop) backToTop.classList.toggle("show", scrollTop > 400);
}

window.addEventListener("scroll", onScroll);
onScroll();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Mobile menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.querySelector("i").className = navLinks.classList.contains("open")
      ? "bx bx-x"
      : "bx bx-menu";
  });
}

// ===== Slide elements in as you scroll =====
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("visible");
          observer.unobserve(el);
          // clear the stagger delay afterwards so hover effects feel instant
          setTimeout(() => (el.style.transitionDelay = ""), 1200);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item, i) => {
    // small stagger for items that sit next to each other
    item.style.transitionDelay = (i % 3) * 0.12 + "s";
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// ===== Gentle 3D tilt on the drink cards =====
document.querySelectorAll(".drink-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform =
      `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
