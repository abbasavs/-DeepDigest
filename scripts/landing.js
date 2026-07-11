// 1. LENIS - Smooth Scroll Configuration
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ==========================================================================
// GSAP Custom Cursor Implementation
// ==========================================================================
const cursor = document.querySelector(".custom-cursor");
const follower = document.querySelector(".custom-cursor-follower");

gsap.set(cursor, { xPercent: -50, yPercent: -50 });
gsap.set(follower, { xPercent: -50, yPercent: -50 });

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: "power2.out",
  });

  gsap.to(follower, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
    ease: "power2.out",
  });
});

// Cursor Hover States
const interactables = document.querySelectorAll(
  "a, button, .scroll-down, .panel",
);
interactables.forEach((el) => {
  el.addEventListener("mouseenter", () =>
    document.body.classList.add("hovering"),
  );
  el.addEventListener("mouseleave", () =>
    document.body.classList.remove("hovering"),
  );
});

// Magnetic Button Logic (Awwwards Style)
const magnetics = document.querySelectorAll(".magnetic-element");

magnetics.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const h = rect.width / 2;
    const w = rect.height / 2;
    const x = e.clientX - rect.left - h;
    const y = e.clientY - rect.top - w;

    gsap.to(btn, {
      x: x * 0.4, // Pull strength
      y: y * 0.4,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  });
});

// ==========================================================================
// Scroll Animations & Text GSAP
// ==========================================================================

// Initial Hero Text Entrance
gsap.from(".hero-text span", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  stagger: 0.2,
  ease: "power4.out",
  delay: 0.2,
});

// Initial setup for the pinned transition
gsap.set(".description", { opacity: 0, scale: 0.95 });

// HERO TO SECOND SECTION TRANSITION
const tlHeroTransition = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-transition-container",
    start: "top top",
    end: "+=120%", // Extend the scroll distance slightly for a smoother transition
    pin: true,
    scrub: 1,
  },
});

tlHeroTransition
  .to(".hero", {
    yPercent: -120,
    xPercent: 20,
    rotation: 10,
    scale: 0.9,
    opacity: 0,
    ease: "power2.inOut",
  })
  .to(
    ".hero-text",
    {
      y: -100,
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  )
  .to(
    ".hero-ghost",
    {
      x: "10vw", // Shift it gently to rest inside the padding area
      yPercent: -40, // Float slightly upwards near the title/text
      rotation: -10, // Slight tilt
      width: 100, // Exactly 100px width as requested
      opacity: 0.8,
      ease: "power2.inOut",
    },
    "<"
  )
  .to(
    ".description",
    {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
    },
    "<0.2" // Start fading in description slightly after hero starts leaving
  );

// DESCRIPTION TEXT COLOR WIPE
const textEls = document.querySelectorAll(".reveal-text");
textEls.forEach((text) => {
  gsap.to(text, {
    color: "#ffffff",
    duration: 1,
    scrollTrigger: {
      trigger: text,
      start: "top 70%",
      end: "bottom 50%",
      scrub: true,
    },
  });
});

// HORIZONTAL SCROLL
let sections = gsap.utils.toArray(".panel");

let horizontalTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-section",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".horizontal-section").offsetWidth,
  },
});

// Text animations INSIDE the horizontal scrolling panels
sections.forEach((panel, i) => {
  // We target elements inside each panel
  const header = panel.querySelector(".panel-header");
  const title = panel.querySelector(".panel-title");
  const content = panel.querySelector(".panel-content");

  // We use containerAnimation to trigger based on the horizontal slider
  gsap.from([header, title, content], {
    x: 100, // Slide in from right
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: panel,
      containerAnimation: horizontalTween,
      start: "left 80%", // Animates when panel's left edge hits 80% viewport
      toggleActions: "play none none reverse",
    },
  });
});

// FOOTER REVEAL
gsap.from(".footer-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 60%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".big-btn", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".footer",
    start: "top 60%",
    toggleActions: "play none none reverse",
  },
});

// ==========================================================================
// Ghost Character Illustrations (Parallax & Foreground Integrations)
// ==========================================================================
const heroGhost = document.querySelector(".hero-ghost");
const footerGhost = document.querySelector(".footer-ghost");

// 1. Mouse Move Parallax (Only triggers when ghosts are technically visible)
window.addEventListener("mousemove", (e) => {
  // Prevent GSAP conflict: stop mouse parallax when scrolling away from the top so ScrollTrigger can take over without getting overwritten
  if (window.scrollY > 20) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  if (heroGhost)
    gsap.to(heroGhost, {
      x: x * 30,
      y: y * 30, // Using just x/y for the slight parallax
      duration: 2,
      ease: "power2.out",
      overwrite: "auto",
    });
  // Footer ghost pushes the opposite direction for a creepy feel
  if (footerGhost)
    gsap.to(footerGhost, {
      x: x * -40,
      y: y * 40,
      duration: 3,
      ease: "power2.out",
      overwrite: "auto",
    });
});

// 2. Scroll Animations (Triggered dynamically as the sections appear)

// Hero Ghost: Drifts upward slowly out of view as you scroll past the hero
if (heroGhost) {
  // Make the ghost appear on load too
  gsap.from(heroGhost, {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
  });
}

// Footer Ghost: Rises menacingly up from behind the button as you hit the footer
if (footerGhost) {
  gsap.from(footerGhost, {
    yPercent: 80,
    rotation: -25,
    scale: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%", // Animates heavily exactly as the footer curves into view
      end: "bottom bottom",
      scrub: 1,
    },
  });
}
