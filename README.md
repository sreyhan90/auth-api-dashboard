##📦 Auth + API Dashboard

A modern React dashboard application built with authentication, protected routing, API integration, and production-level error handling.

##🚀 Project Overview

This project simulates a real-world frontend workflow using:

-Sprint-based development

-Feature branches

-Pull Request workflow

-Definition of Done (DoD)

-Jira-style ticket breakdown

-The goal was not just to build a dashboard, but to follow a real team development process.

##🛠 Tech Stack

-React + Vite + TypeScript

-React Router

-Redux Toolkit

-Formik + Yup

-Custom CSS (glassmorphism style UI)

-DummyJSON API

##🔐 Features
#Authentication

-Login with Formik + Yup validation

-API-based authentication

-Token + user persistence (localStorage)

-Protected routes

-Logout with history replace

-Auth edge-case handling

-Dashboard

-Responsive layout (Sidebar + Topbar)

-Token debug indicator

-Session persistence

-Users Module

-Users list (RTK async fetch)

-Client-side search

-Row click navigation

-User detail page

-Loading and error states

-Quality & Production Safety

-Custom 404 page

-Dashboard-level nested 404 handling

-Global Error Boundary

-Auth state hydration on refresh

-Back-button protection after logout

##🧠 Development Methodology

This project was built following a sprint-based structure:

Sprint 1 Scope
Ticket	     Description	                            SP
FE-01	       Project setup	                           3
FE-03	       Login UI	                                 3
FE-04	       Auth API integration	                     5
FE-05	       Route guard + persist	                   5
FE-06	       Dashboard layout	                         4
FE-07	       Dashboard stats	                         3
FE-08	       Users list	                               6
FE-09	       User detail	                             4
FE-10	       Quality (404 + ErrorBoundary )	           5
FE-11	       Documentation	                           3

Total: 41 Story Points

Each feature was developed using:

Feature branches

Clean commits

Pull Requests

Squash merge strategy

##📂 Folder Structure
src/
  app/
    store.ts
    hooks.ts
  features/
    auth/
      authSlice.ts
      authApi.ts
      authTypes.ts
  Pages/
    LoginPage.tsx
    DashboardHomePage.tsx
    UsersPage.tsx
    UserDetailPage.tsx
    NotFoundPage.tsx
  Layouts/
    DashboardLayout.tsx
  Components/
    Topbar.tsx
    Sidebar.tsx
    ErrorBoundary.tsx
  CSS/


##🔑 Demo Credentials
username: emilys
password: emilyspass

▶ Run Locally
git clone <your-repo-url>
cd auth-api-dashboard
npm install
npm run dev

##🧪 Demo Flow

-Login

-Dashboard

-Navigate to Users

-Search users

-Open user detail

-Test 404 route

-Logout

-Test back-button protection

##🎯 Engineering Highlights

-State hydration from localStorage on refresh

-Secure route guarding

-Error boundary for runtime crash handling

-Nested route-based 404 handling

-Branch-per-ticket Git workflow

-Sprint-driven feature delivery

##📌 Future Improvements

-Role-based access

-Pagination for users

-Dark/light theme toggle

-Unit tests (Jest + RTL)

-Axios interceptor for token refresh

-Global loading overlay

##👨‍💻 Author

Semir Reyhan
Frontend Developer (Transitioning from Civil Engineering)
