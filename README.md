# GroceryDeliveryApp

# 🛒 Real-World Grocery Delivery Application

Welcome to the **Grocery Delivery Application**! This is a production-ready, full-stack system designed with a multi-role architecture featuring a customer storefront, a powerful Admin Panel, a Delivery Partner Dashboard, and real-time order tracking mechanisms.

---

## 🚀 Key Features

### 🛒 User-Friendly Storefront
- Browsing groceries by categories, search, and intuitive cart management.
- Secure checkout pipeline with multi-step validation.

### 🔐 Multi-Role Authentication & Access Control
- **User:** Browse products, place orders, track deliveries.
- **Admin:** Manage products, monitor system-wide orders, and manage fleets.
- **Delivery Partner:** Accept/reject delivery tasks and share live locations.

### 📦 Admin Control Center
- Dynamic CRUD operations for inventory and category management.
- Real-time stock tracking with **automated low-stock email alerts**.
- Delivery fleet management and performance tracking.

### 🚴 Delivery Partner Hub & Live Tracking
- Dedicated dashboard for active delivery drivers.
- **Automated partner auto-assignment** utilizing background queues.
- Real-time location sharing and interactive live order tracking map for users.

### ⚡ Background Jobs & Automation
- Orchestrated with **Inngest** for async tasks (automated emails, transactional updates, auto-assignments).

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) *(Neon Serverless)* |
| **Automation**| **Inngest** (Background Queues & Cron Jobs) |

---

## 🏗️ Project Architecture

The application is split into two primary decoupled directories:
- `/client`: Frontend interface powered by React and styled with Tailwind CSS.
- `/server`: Node.js/Express REST API utilizing Inngest background pipelines and Neon PostgreSQL.

---

## 💻 Getting Started

### Prerequisites
Make sure you have **Node.js (v18+)** and **npm** installed on your local machine.

### Installation Steps
