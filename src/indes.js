document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // stop observing after it's shown
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("section, .box, .metric, .circle-wrapper").forEach((el) => {
      el.classList.add("hidden"); // start hidden
      observer.observe(el);
    });
  });