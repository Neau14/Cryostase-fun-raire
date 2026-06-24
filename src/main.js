import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.progress');
  const loadingScreen = document.getElementById('loading');
  const appContainer = document.getElementById('app');

  setTimeout(() => {
    progressBar.style.width = '100%';
  }, 100);

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    appContainer.style.opacity = '1';
    appContainer.style.pointerEvents = 'auto';
    appContainer.querySelector('.spell-card').style.transform = 'translateY(0)';
    
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000);
  }, 2500);

  // Initialize ParticlesJS for Snow/Ice effect on background
  if (window.particlesJS) {
    const particleConfig = {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ["#ffffff", "#00f2fe"] },
        shape: { type: ["circle", "polygon"], polygon: { nb_sides: 6 } },
        opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
        size: { value: 4, random: true, anim: { enable: false } },
        line_linked: { enable: false },
        move: { enable: true, speed: 1.5, direction: "bottom", random: true, straight: false, out_mode: "out", bounce: false }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    };

    window.particlesJS('particles-js', particleConfig);
    // Also add particles to the loading screen
    window.particlesJS('particles-loading', particleConfig);
  }
});
