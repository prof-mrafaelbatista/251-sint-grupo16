from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

# Cria a instância principal do app
app = Flask(__name__)

# Configura a chave da API do Gemini (substitua pela sua)
genai.configure(api_key='AIzaSyAAkTiXLfKBRUSNAfi0b2vLYPFTtaZH0E')

# Função para consultar o modelo do Gemini
def chamar_modelo_ia(mensagem):
    model = genai.GenerativeModel("gemini-1.5-flash")
    resposta = model.generate_content(mensagem)
    return resposta.text

# Rotas HTML
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/quiz')
def quiz():
    return render_template('menu.q.html')

@app.route('/teoria')
def teoria():
    return render_template('teorias.html')

@app.route('/duvidas')
def duvidas():
    return render_template('duvidas.html')

# Rota de API para chat
@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json(force=True)
        if not data or "message" not in data:
            return jsonify({"error": "Mensagem não fornecida"}), 400

        user_message = data["message"]
        resposta = chamar_modelo_ia(user_message)

        return jsonify({"reply": resposta})

    except Exception as e:
        return jsonify({"error": f"Ocorreu um erro: {str(e)}"}), 500

# Execução do servidor
if __name__ == "__main__":
    app.run(debug=True)
