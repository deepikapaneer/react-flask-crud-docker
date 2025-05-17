from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="test1234",
    database="cruddb"
)
cursor = db.cursor(dictionary=True)

@app.route("/users", methods=["GET"])
def get_users():
    cursor.execute("SELECT * FROM users")
    return jsonify(cursor.fetchall())

@app.route("/users", methods=["POST"])
def add_user():
    data = request.json
    cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (data["name"], data["email"]))
    db.commit()
    return jsonify({"message": "User added"}), 201

@app.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    cursor.execute("DELETE FROM users WHERE id=%s", (id,))
    db.commit()
    return jsonify({"message": "User deleted"})

if __name__ == "__main__":
    app.run(debug=True)
