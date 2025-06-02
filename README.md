# 251-sint-grupo16 

Estrutura do Projeto:

├── static/
│   ├── script.js
│   ├── scriptd.js
│   ├── scriptq.js
│   ├── scriptt.js
│   ├── style.css
│   ├── styled.css
│   ├── styleq.css
│   └── stylet.css
├── templates/
│   ├── index.html
│   ├── duvidas.html
│   ├── menu.q.html
│   └── teorias.html
└── app.py
Informações do Projeto:
🐍 Python Quiz

Um site interativo desenvolvido com:
HTML, CSS, JavaScript e Flask.
Com integração à API Gemini (Google) para responder dúvidas sobre programação em Python.
O site tem como objetivo ajudar iniciantes a testarem e reforçarem seus conhecimentos sobre fundamentos da linguagem Python.

---

## 🎯 Funcionalidades

- 🧠 **Quiz** com perguntas divididas por tópicos:
  - Estruturas de Seleção
  - Estruturas de Repetição
  - Vetores e Matrizes
  - Funções e Procedimentos
  - Tratamento de Exceções
   
- 📘 **Resumo Teórico** para revisão rápida dos conteúdos
- 🤖 **Assistente com IA (Gemini API)** para tirar dúvidas sobre os tópicos
- 🌙 Suporte a **modo claro/escuro**
- 📱 Layout responsivo e moderno
- 📆 Rodapé com data atual e ícones de redes sociais (Instagram e Discord)

---

## 🛠️ Tecnologias Utilizadas

- HTML5 + CSS3 + JavaScript puro
- Python 3.x
- Flask (framework web)
- Google Gemini API (IA para dúvidas)
- Font Awesome (ícones sociais)

---

## 🖼️ Layout

### Página Inicial
- Escolha entre acessar o quiz, revisar a teoria ou conversar com a IA.
- Interface escura com botões coloridos por categoria.

### Quiz
- Selecione um tema para começar o quiz.

### Teoria
- Tópicos explicados com exemplos de código em Python.

---

## ⚙️ Como Rodar Localmente

1. **Clone o repositório:**
```bash
- git clone https://github.com/seu-usuario/python-quiz.git
cd python-quiz
- Crie o ambiente virtual:
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
- Instale as dependecias
flask
google-generativeai
- Crie um arquivo .env ou configure diretamente no app.py: asua chave da api.
-só iniciar a aplicação através do arquivo app.py.

Responsável do projeto: Ana Julya Rodrigues Dionizio.
