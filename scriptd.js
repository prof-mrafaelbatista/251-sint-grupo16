// Envio da mensagem
async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  try {
    const res = await fetch("/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message })
});


    const data = await res.json();
    addMessage(data.reply, "bot");
  } catch (err) {
    addMessage("Erro ao se comunicar com o Gemini.", "bot");
  }
}

// Adiciona mensagens no chat
function addMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}`;
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Alternar tema claro/escuro
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
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

// Atalho para o botão de envio
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
