from flask import Flask, render_template
app = Flask(__name__)   

@app.route('/play')         
def play():
    return render_template('playground.html', num=3) 

@app.route('/play/<int:num>')
def changenum(num):
    return render_template('playground.html', num = num)

@app.route('/play/<int:num>/<string:color>')
def changecolor(num,color):
    return render_template('playground.html', num = num, color = color)

if __name__=="__main__":   
    app.run(debug=True)