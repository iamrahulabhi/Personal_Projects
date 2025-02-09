import os
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables
load_dotenv()

app = Flask(__name__)

# MySQL Configuration
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

mysql = MySQL(app)

# API to add a profile
@app.route('/api/profile', methods=['POST'])
def add_profile():
    data = request.json
    full_name = data.get('full_name')
    email = data.get('email')
    username = data.get('username')
    country = data.get('country')

    if not (full_name and email and username and country):
        return jsonify({'error': 'Missing required fields'}), 400

    cursor = mysql.connection.cursor()
    query = """
        INSERT INTO profile (full_name, email, username, country)
        VALUES (%s, %s, %s, %s)
    """
    cursor.execute(query, (full_name, email, username, country))
    mysql.connection.commit()
    profile_id = cursor.lastrowid  # Get the auto-incremented ID
    cursor.close()

    return jsonify({'message': 'Profile created successfully', 'id': profile_id}), 201

# API to get all profiles
@app.route('/api/profiles', methods=['GET'])
def get_profiles():
    cursor = mysql.connection.cursor()
    query = "SELECT * FROM profile"
    cursor.execute(query)
    results = cursor.fetchall()

    profiles = []
    for row in results:
        profiles.append({
            'id': row[0],
            'full_name': row[1],
            'email': row[2],
            'username': row[3],
            'country': row[4]
        })

    cursor.close()
    return jsonify(profiles), 200

if __name__ == '__main__':
    CORS(app)
    app.run(debug=True)
