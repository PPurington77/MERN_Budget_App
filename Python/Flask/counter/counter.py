from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'

@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] += 1
    elif 'given' in session:
        session['given'] = 1
    else:
        session['counter'] = 1
        session['given'] = 1
    return render_template("index.html")

@app.route('/addtwo')
def addtwo():
    session['given'] += 2   
    session['counter'] -= 1    #every time click addtwo button, it goes to'/addtwo', then redirect to '/'(counter session will also add 1 here)
    return redirect('/')

@app.route('/reset')
def destroy_session():
    session.clear()
    return redirect('/')

@app.route('/addnum', methods = ['POST'])
def addnum():
    session['given'] += int(request.form['number'])
    session['counter'] -= 1  #need to - the 1 when page redirect to '/'
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)


