from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)    

@app.route('/')          
def hello_world():
    return 'Hello World!'  

if __name__=="__main__":      
    app.run(debug=True)  


# <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='my_style.css') }}">
# <script type="text/javascript" src="{{ url_for('static', filename='my_script.js') }}"></script>
# <img src="{{ url_for('static', filename='my_img.png') }}">