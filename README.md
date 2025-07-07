# 🔐 RESTful API with JWT-Based User Authentication using Node.js and MongoDB

This project demonstrates the implementation of **JWT-based authentication** in a **RESTful API** built with **Node.js**, **Express**, and **MongoDB**. The API allows users to register, log in, and access protected routes using secure token-based authentication.

---

## 📌 Task Objective

> Implement JSON Web Token (JWT) authentication in an existing RESTful API. Ensure secure handling of tokens and protect certain routes from unauthorized access.

---

## ✅ Key Features

- User registration with hashed password storage
- User login with JWT token generation
- Middleware to authenticate requests using tokens
- Protected route accessible only with a valid token
- Environment variables used for sensitive configurations

---

## 🧰 Technologies Used

- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (for password hashing)
- dotenv (for secure env config)

---

## 🚀 How to Run

1. Clone the repository
2. Install dependencies using `npm install`
3. Add a `.env` file with your MongoDB URI and JWT secret
4. Start the server using `npm start`
5. Use Postman to test the register, login, and protected endpoints

---

## 🔒 Security Practices

- JWT secret and DB credentials stored in `.env`
- `.env` file excluded using `.gitignore`
- Passwords are hashed before storing in the database
- Token validation handled via middleware

---
