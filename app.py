from flask import Flask, request, render_template, jsonify
from num2words import num2words

app = Flask(__name__)

@app.route('/')
def home():
    # This will render a home page with the form on it.
    return render_template('index.html')

@app.route('/convert-number', methods=['POST'])
def convert_number():
    # Extract the number from the form data.
    number = request.form.get('number')
    try:
        parte_entera, parte_decimal = str(number).split('.')
    except ValueError:
        parte_entera, parte_decimal = str(number), 0

    parte_entera_palabras = num2words(int(parte_entera), lang='es')
    parte_decimal_palabras = num2words(int(parte_decimal), lang='es')


    # Convert the number to words using num2words.
    number_as_text = f"{parte_entera_palabras} punto {parte_decimal_palabras}"


    # Prepare a response to send back to the user.
    response = {
        'number': number,
        'number_as_text': number_as_text
    }

    # Return the response as JSON.
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
