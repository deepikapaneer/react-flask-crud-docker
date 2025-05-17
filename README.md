![App Screenshot](screenshot1.png,screenshot2.png)

# React + Flask + MySQL CRUD App (Dockerized)

This is a full-stack CRUD application using:

- ⚛️ **React** for the frontend  
- 🐍 **Flask** for the backend  
- 🐬 **MySQL** as the database  
- 🐳 **Docker Compose** to run all services together

---

## 📂 Project Structure
├── backend/ # Flask app
│ ├── app.py
│ ├── Dockerfile
│ └── requirements.txt
│
├── frontend/ # React app (created with create-react-app)
│ └── ...
│
├── db/ # MySQL initialization
│ └── init.sql
│
├── docker-compose.yml # Defines services: frontend, backend, mysql
└── README.md


---

## 🚀 How to Run It with Docker

```bash
docker compose up --build

Then open:

Frontend → http://localhost:3000
 
Backend API → http://localhost:5000/users
 

------
Features
View users

Add users

Delete users

MySQL auto-init via init.sql

Works seamlessly in Docker

----------
🧠 What You’ll Learn
Building full-stack apps with React + Flask

Connecting frontend ↔ backend ↔ database

Docker Compose for multi-container development


-----------
🙋‍♀️ Author
Made by deepikapaneer
