const toggle = document.getElementById("theme-toggle");
const main = document.getElementById("main");

// Muda tema claro/escuro
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

// Perguntas do quiz por tema
const questions = {
  "seleção": [
    {
      question: "Qual estrutura é usada para decisões em Python?",
      options: ["switch", "if", "loop", "for"],
      answer: "if"
    }
  ],
  "repetição": [
    {
      question: "Qual laço repete enquanto a condição for verdadeira?",
      options: ["for", "while", "loop", "repeat"],
      answer: "while"
    }
  ],
  "vetores": [
    {
      question: "Qual é a estrutura nativa para vetores em Python?",
      options: ["array", "list", "vector", "set"],
      answer: "list"
    }
  ],
  "funções": [
    {
      question: "Como se define uma função em Python?",
      options: ["function", "def", "fun", "define"],
      answer: "def"
    }
  ],
  "exceções": [
    {
      question: "Qual palavra é usada para capturar erros?",
      options: ["try", "error", "except", "catch"],
      answer: "except"
    }
  ]
};

// Função para iniciar o quiz
function startQuiz(topic) {
  const q = questions[topic][0];

  main.innerHTML = `
    <div class="quiz">
      <h2 class="quiz-question">${q.question}</h2>
      <div class="quiz-options">
        ${q.options.map(opt => `<button onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>`).join('')}
      </div>
      <br/>
      <button onclick="location.reload()">Voltar</button>
    </div>
  `;
}

// Verifica resposta
function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("✅ Resposta correta!");
  } else {
    alert(`❌ Errado. A resposta certa é: ${correct}`);
  }
}
    // Alternar tema
    document.getElementById("theme-toggle").addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
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