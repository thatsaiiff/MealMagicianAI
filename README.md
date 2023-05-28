# MealMagicianAI

To run this Flask app on your local server, follow the steps below:

## Prerequisites

1. Python: Make sure you have Python installed on your machine. You can download and install Python from the official Python website: https://www.python.org/downloads/

2. Flask and other dependencies: Install the required dependencies by running the following command in your terminal or command prompt:

   ```
   pip install flask flask_wtf wtforms
   ```

## Running the App

1. Download the code: Obtain a copy of the code and save it to a directory on your computer.

2. Set up the virtual environment (optional): It's recommended to create a virtual environment for the app. In your terminal or command prompt, navigate to the project directory and run the following commands:

   - On macOS/Linux:
     ```
     python3 -m venv env
     source env/bin/activate
     ```

   - On Windows:
     ```
     python -m venv env
     env\Scripts\activate
     ```

3. Set the Flask environment variables: In your terminal or command prompt, set the Flask environment variables by running the following command:

   - On macOS/Linux:
     ```
     export FLASK_APP=app.py
     export FLASK_ENV=development
     ```

   - On Windows:
     ```
     set FLASK_APP=app.py
     set FLASK_ENV=development
     ```

4. Start the Flask development server: Run the following command to start the Flask development server:

   ```
   flask run
   ```

5. Access the app: Once the server is running, you can access the app by opening a web browser and visiting `http://localhost:5000/home`. The app will be up and running, allowing you to upload files and generate recipe responses.

That's it! You have successfully set up and run the Flask app on your local server. You can explore different routes such as `/about` and `/working` by appending them to the base URL `http://localhost:5000/`.

Note: If you encounter any errors or issues during the setup or execution of the app, please ensure that you have followed the steps correctly and that all the necessary dependencies are installed.
