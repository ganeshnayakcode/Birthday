// Create floating balloons on the intro page
const balloonsContainer = document.getElementById('balloons');
if (balloonsContainer) {
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloon.style.animationDuration = (Math.random() * 5 + 5) + 's';
    balloonsContainer.appendChild(balloon);
  }
}

// Confetti for video page
if (document.body.classList.contains('video-page')) {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
  }
}

const style = document.createElement('style');
style.innerHTML = `
.confetti {
  position: fixed;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: fall linear forwards;
  z-index: 999;
}
@keyframes fall {
  to { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
`;
document.head.appendChild(style);
