document.addEventListener('DOMContentLoaded', () => {
    // Particle Animation
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            color: ['#ff4500', '#ffd700', '#008000'][Math.floor(Math.random() * 3)]
        };
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.7;
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas