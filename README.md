# 🔐 Auth API Dashboard

A modern, production-style dashboard application built with **React, TypeScript, and Redux Toolkit**, featuring authentication, protected routes, and real-time data handling.

🚀 **Live Demo:** https://your-live-demo-link.vercel.app
💻 **GitHub:** https://github.com/sreyhan90/auth-api-dashboard

---

## ✨ Features

- 🔐 Authentication (Login / Logout)
- 🔒 Protected Routes (Route Guard)
- 📊 Dashboard Layout with Nested Routing
- 👥 Users List & Detail Pages
- 🔍 Dynamic Routing (`/users/:id`)
- ⚡ API Integration (DummyJSON)
- 🧠 Global State Management (Redux Toolkit)
- 💾 Persistent Auth (localStorage)
- ❌ Custom 404 Page
- 🚦 Loading & Error Handling

---

## 🧠 Tech Stack

- **Frontend:** React (Vite) + TypeScript
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **API:** Axios (DummyJSON API)
- **Styling:** CSS / Tailwind (if used)
- **Tools:** Git, GitHub, VS Code

---

## 🔐 Authentication Flow

- User logs in via API (`/auth/login`)
- Access token is stored in **Redux + localStorage**
- Protected routes are guarded via `ProtectedRoute`
- Unauthorized users are redirected to `/login`

---

## 🗂️ Project Structure

```bash
src/
├── app/              # Redux store & hooks
├── features/         # Auth slice & API logic
├── Pages/            # Page components
├── Components/       # Reusable UI components
├── Layouts/          # Dashboard layout
├── Routes/           # Protected route logic
```

---

## ⚙️ Installation

```bash
git clone https://github.com/sreyhan90/auth-api-dashboard.git
cd auth-api-dashboard
npm install
npm run dev
```

---

## 🔑 Demo Credentials

```txt
Username: kminchelle
Password: 0lelplR
```

---

## 🚀 Production Build

```bash
npm run build
npm run preview
```

---

## 🎯 Key Highlights

- Implemented **secure authentication flow**
- Built **protected routing system**
- Managed global state with Redux Toolkit
- Designed scalable and modular folder structure
- Handled loading, error, and edge cases

---

## 📌 Future Improvements

- 🔄 Add React Query for data fetching
- 🧪 Unit & integration tests (Jest / React Testing Library)
- 🎨 Improve UI/UX with design system
- 🔐 Token refresh & better auth handling

---

## 👨‍💻 Author

**Semir Reyhan**

- Frontend Developer (Next.js • React • TypeScript)
- Civil Engineer → Software Developer

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
