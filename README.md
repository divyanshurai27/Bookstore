# 📚 Bookstore Web App

A full-stack **MERN (MongoDB, Express, React, Node.js)** web application for browsing and managing books with user authentication.

---

## 📁 Project Structure

```
divyanshurai27-bookstore/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── controller/
│   ├── modal/
│   └── routes/
│
└── frontend/
    ├── src/
    ├── package.json
    └── vite.config.js
```

---

## ⚙️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

---

## 🔐 Features

* User Signup & Login
* JWT Authentication
* View Books / Courses
* Responsive UI
* API Integration

---

## 🧑‍💻 Installation (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/divyanshurai27-bookstore.git
cd divyanshurai27-bookstore
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=4001
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

### Backend (`.env`)

```
MONGO_URI=
JWT_SECRET=
PORT=
```

### Frontend (Vercel Env)

```
VITE_API_URL=your_backend_url
```

---

## 🚀 Deployment

### Frontend

* Deployed on Vercel

### Backend

* Deployed on Render or Replit

---

## ⚠️ Important Notes

* Do NOT push `.env` file to GitHub
* Always use environment variables for secrets
* Enable CORS in backend for frontend connection

---

## 📌 Future Improvements

* Add payment integration
* Admin dashboard
* Book search & filters
* Image upload support

---

## 👨‍💻 Author

**Divyanshu Rai**

---

## ⭐ Contribute

Feel free to fork and contribute to this project!


