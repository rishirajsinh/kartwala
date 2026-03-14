# 🛒 Kart Wala – E-commerce Web App

## 🚀 Overview
**Kart Wala** is a full-stack e-commerce web application that allows users to browse products, add them to a cart, and manage orders.  
It provides a modern shopping experience with authentication, search, filters, pagination, and responsive design.

This project uses **ReactJS, Tailwind CSS, Node.js, Express.js, and MongoDB**, covering all core full-stack development features.

---

## 📌 Problem Statement
Many small e-commerce ideas or learners need a platform to showcase products online. Existing platforms are either complex or not customizable.  

**Kart Wala** allows users to:  
- Browse products  
- Add to cart & place orders  
- Search, filter, and sort products  
- Toggle between Dark/Light themes  

---

## 🛠 Tech Stack

**Frontend:**  
- ReactJS  
- Tailwind CSS  
- React Router  
- React Hooks (`useState`, `useEffect`, `useRef`, `useContext`)  

**Backend:**  
- Node.js + Express.js  
- MongoDB (via Mongoose)  

**State Management:**  
- Context API / Redux Toolkit (for auth, cart, and theme state)  

---

## 📋 Key Features

### Authentication
- Signup / Login  
- Password validation  
- Protected routes for checkout and profile pages  

### Product Management (CRUD)
- Admin can add/update/delete products  
- Products include name, description, price, category, and image  

### Cart & Orders
- Add/remove products to cart  
- Checkout page with order summary  
- Orders saved in the database  

### Search, Filter & Sort
- Search products by name  
- Filter by category or price range  
- Sort products by price or popularity  

### Pagination
- Paginate product lists for better UX  
- Backend: MongoDB `limit` + `skip`  
- Frontend: Pagination component  

### Theme Support
- Light/Dark mode toggle  
- Persist preference in `localStorage`  

### Debouncing
- Search bar uses debounce to reduce unnecessary API calls  

### Responsive UI
- Fully responsive with Tailwind CSS  
- Works on desktop, tablet, and mobile  

### Error Handling
- Backend: proper HTTP status codes & try-catch  
- Frontend: error messages and loading states  

---

## 🗂 Database Design

**User Collection**  
- name, email, password, isAdmin, theme  

**Product Collection**  
- name, description, price, category, image  

**Order Collection**  
- userId, products (productId + quantity), totalPrice, status  

---

## 📈 Why This Idea Is Hackathon-Ready
- Covers full-stack development: frontend + backend + database  
- Includes authentication, CRUD, state management, search/filter, pagination, debouncing, theme toggle, and responsive design  
- Easy to explain and demonstrate within hackathon time  
