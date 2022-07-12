from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)    
app.secret_key = 'keep it secret, keep it safe' 

@app.route('/')          
def survey():
    return render_template('index.html')  

@app.route('/result')
def result():
    return render_template('result.html')

@app.route('/process', methods = ['POST'])
def process():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comment'] = request.form['comment']
    session['age'] = request.form['age']
    if 'check' in request.form: # will check if 'check' has value
        session['check'] = request.form['check']
    else:
        session['check'] = "No"
    return redirect('/result')

@app.route('/back')
def back():
    return render_template('index.html')

if __name__=="__main__":      
    app.run(debug=True)  


