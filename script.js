onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Initialize background fireflies
  const container = document.querySelector('.fireflies-container');
  if (container) {
    const fireflyCount = 30;
    for (let i = 0; i < fireflyCount; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      firefly.style.left = `${Math.random() * 100}vw`;
      firefly.style.bottom = `${Math.random() * 20 - 10}vh`;
      firefly.style.setProperty('--duration', `${8 + Math.random() * 8}s`);
      firefly.style.setProperty('--drift', `${(Math.random() - 0.5) * 150}px`);
      firefly.style.animationDelay = `${Math.random() * 10}s`;
      
      // Randomize size slightly for depth
      const size = 3 + Math.random() * 4;
      firefly.style.width = `${size}px`;
      firefly.style.height = `${size}px`;
      
      container.appendChild(firefly);
    }
  }
};

// Create a burst of sparkles at target coordinates
const createSparkleBurst = (x, y) => {
  const count = 12;
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 30 + Math.random() * 100;
    const tx = `${Math.cos(angle) * distance}px`;
    const ty = `${Math.sin(angle) * distance}px`;
    
    sparkle.style.setProperty('--tx', tx);
    sparkle.style.setProperty('--ty', ty);
    
    // Random size for variety
    const size = 4 + Math.random() * 8;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    document.body.appendChild(sparkle);
    
    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
  }
};

window.addEventListener('click', (e) => {
  // Prevent creating bursts if clicked on links or interactive elements if any exist
  createSparkleBurst(e.clientX, e.clientY);
});

window.addEventListener('touchstart', (e) => {
  if (e.touches && e.touches[0]) {
    createSparkleBurst(e.touches[0].clientX, e.touches[0].clientY);
  }
});