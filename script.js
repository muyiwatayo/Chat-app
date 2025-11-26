const eventDate = new Date("2025-12-01T24:00:00").getTime();
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdown);
    timer.innerHTML = "Dev.s Boot Camp is Live!";
  }
}, 1000);

function copyEmail() {
  const email = "techguruma@gmail.com";
  navigator.clipboard.writeText(email).then(() => 
  {
    alert("Email copied to clipboard!");
  });
}