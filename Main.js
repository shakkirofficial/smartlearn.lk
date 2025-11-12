// Countdown Timer Example
function countdown(id, endDate) {
  const el = document.getElementById(id);
  function update() {
    const now = new Date();
    const diff = new Date(endDate) - now;
    if (diff <= 0) {
      el.innerHTML = "00d 00h 00m 00s";
      clearInterval(interval);
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const mins = Math.floor((diff / (1000*60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    el.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
  }
  update();
  const interval = setInterval(update, 1000);
}

countdown("launchCountdown", "2026-01-01T00:00:00");
countdown("alCountdown", "2026-08-01T00:00:00"); // Example for A/L 2026

/* ===== Slide Panel JS ===== */
function openNav() {
  document.getElementById("sidePanel").style.width = "280px";
}

function closeNav() {
  document.getElementById("sidePanel").style.width = "0";
}

function showLogin() {
  alert("Login form will appear here!");
  closeNav();
}

function showSignup() {
  alert("Signup form will appear here!");
  closeNav();
}
// Smooth Back Button Navigation
document.querySelectorAll('.back').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent instant jump
    const href = this.getAttribute('href');
    
    // Fade out effect
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = href;
    }, 500); // Match transition duration
  });
});
