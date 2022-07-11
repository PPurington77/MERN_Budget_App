from flask import Flask, render_template  
app = Flask(__name__)    

@app.route('/')          
def open():
    return render_template("check.html",num1=8, num2=8, color1="yellow", color2="green")

@app.route('/<int:num1>')
def num(num1):
    return render_template("check.html", num1=num1, num2=8, color1="yellow", color2="green")

@app.route('/<int:num1>/<int:num2>')
def num3(num1,num2):
    return render_template("check.html",num1=num1, num2=num2, color1="yellow", color2="green")

@app.route('/<int:num1>/<int:num2>/<string:color1>/<string:color2>')
def changecolor(num1,num2,color1,color2):
    return render_template("check.html",num1=num1, num2=num2, color1=color1, color2=color2)

if __name__=="__main__":      
    app.run(debug=True) 