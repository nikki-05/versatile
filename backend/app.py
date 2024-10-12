from flask import Flask, request, jsonify
from googletrans import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
translator = Translator()

@app.route('/translate', methods=['POST'])
def translate_text():
    data = request.json
    text_to_translate = data.get('text')
    
    # Translate from English to Hindi
    translation = translator.translate(text_to_translate, src='en', dest='hi')
    
    return jsonify({"translated_text": translation.text})

if __name__ == '__main__':
    app.run(debug=True)
