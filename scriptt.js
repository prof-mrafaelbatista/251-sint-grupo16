const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--text-color', '#1f2a48');
    document.documentElement.style.setProperty('--card-color', '#f0f4ff');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#1f2a48');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--card-color', '#2d3b64');
  }
});

// Rodapé com data atual
const footerDate = document.getElementById("footer-date");
const hoje = new Date();
const formatado = hoje.toLocaleDateString("pt-BR", {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
footerDate.textContent = `Hoje é ${formatado}`;