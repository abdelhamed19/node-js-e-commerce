# 🧾 Product & Category API (Node.js + Express + MongoDB)

Simple RESTful API to manage products and categories using **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Features

- CRUD operations for **Products**
- CRUD operations for **Categories**
- MongoDB with **Mongoose**
- **Validation** and **error handling**
- Relationship: Product belongs to Category
- Structured project with MVC pattern

---

## 📁 Project Structure
```bash
project/ ├── app/ │ ├── controllers/ # Request handlers (logic) │ ├── models/ # Mongoose schemas │ ├── requests/ # Validation logic │ ├── helpers/ # Custom helper functions ├── config/ # DB connection & other configs ├── routes/ # API route definitions ├── index.js # App entry point ├── .env # Environment variables └── README.md # Project info

```

## 📦 Installation

```bash
git clone https://github.com/abdelhamed19/node-js-e-commerce.git
cd node-js-e-commerce
npm install
```

## 🔧 Setup
Create a **.env** file in the root with:
```bash
MONGO_URI=mongodb://localhost:27017/product-api
PORT=3000
```
---

## 🧪 Run Project
```bash
npm run dev
```
---