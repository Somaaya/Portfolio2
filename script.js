 const themeToggle = document.getElementById("theme-toggle");
 const langToggle = document.getElementById("language-toggle");
 const menuToggle = document.getElementById("menu-toggle");
 const navLinks = document.getElementById("nav-links");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
  langToggle.addEventListener("click", () => {
    const isEnglish = langToggle.textContent === "EN";
    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = isEnglish ? el.getAttribute("data-en") : el.getAttribute("data-ar");
    });
    langToggle.textContent = isEnglish ? "AR" : "EN";
    document.documentElement.lang = isEnglish ? "en" : "ar";
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
});

  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  faders.forEach(fade => observer.observe(fade));

  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });