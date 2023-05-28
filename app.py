from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from werkzeug.utils import secure_filename
import os
from wtforms.validators import InputRequired
from food import get_food_response

app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecretkey'
app.config['UPLOAD_FOLDER'] = 'static/files'

class UploadFileForm(FlaskForm):
    file = FileField("File", validators=[InputRequired()])
    submit = SubmitField("Generate Recipe")


@app.route('/home', methods=['GET', 'POST'])
def home():
    form = UploadFileForm()
    if form.validate_on_submit():
        file = form.file.data
        filename = secure_filename(file.filename)
        upload_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(upload_path)
        response = get_food_response(upload_path)
        return render_template('index.html', form=form, response=response)
    return render_template('index.html', form=form)

@app.route('/', methods=['GET', 'POST'])
@app.route('/about', methods=['GET', 'POST'])
def about():
    return render_template('blog.html')

@app.route('/working', methods=['GET', 'POST'])
def working():
    return render_template('working.html')

if __name__ == '__main__':
    app.run(port = 8001, debug=True)
