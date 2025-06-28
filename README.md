# 💊 MedVault – Medical Record App

**MedVault** is a modern, responsive web application designed to manage medical records and appointments securely and intuitively. Built with a dark-mode-first theme aesthetics, MedVault provides users with a seamless, elegant healthcare experience online.

---

## 🚀 Features

### 🌐 General
- Fully responsive design using **Tailwind CSS**
- **Dark mode** enabled by default with a toggle to switch between dark and light themes
- Consistent **glassmorphism UI** for navbars, cards, forms, and modals
- Modular, component-based structure

### 🔐 Authentication
- Secure **Login** and **Signup** pages
- Input field bug fixed: now responsive on first click
- Route protection: Medical Records and Appointments only accessible after login

### 🧭 Navigation
- Frosted-glass Navbar with:
  - MedVault Logo
  - Links to Home, Appointments, Records, About
  - Toggle switch for theme mode
  - Gradient-styled Login and CTA buttons

### 🦸 Hero Section
- Inspired by [this design](https://21st.dev/meschacirung/hero-section-1/default)
- Customized with a **health-themed illustration**
- Bold headline, subtle subtext, and CTA integrated with site styling

### 📊 Dashboard (Landing Page Section)
- Preview of Health Dashboard with 3 frosted cards:
  - 📊 Health Score
  - 📅 Next Appointment
  - 💊 Medications
- Pulsing green indicator showing system status
- Responsive layout across dark/light themes

### 📁 Medical Records Page
- Protected route
- Features:
  - Search for records
  - Add, delete, and download medical records
  - PDF export
- Glass-effect containers and interactive buttons

### 📅 Appointments
- Booking form with inputs for patient name, symptoms, doctor, and date
- Date input opens on full-click area
- Accessible only after login

### 🔚 Footer
- Navy blue themed in dark mode
- Simple link layout consistent with theme

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS 3
- JavaScript (Vanilla or React depending on setup)
- Optional: PDF export using jsPDF or equivalent
- LocalStorage (or backend integration-ready)

---

## 🖼️ Screenshots

_Add screenshots here of:_
- Landing Page
- Login Page
- Records Page
- Appointment Page (Dark & Light mode)

---

## 🔒 Access Control

- Users must **Login** or **Signup** to access protected routes
- Unauthorized access redirects to login with alert

---

## 📁 Folder Structure (example)

```bash
medvault/
├── public/
│   └── assets/          # Images and icons
├── src/
│   ├── components/      # Navbar, Hero, Cards, Forms
│   ├── pages/           # Home, Login, Signup, Records, Appointment
│   └── App.js / index.js
├── README.md
└── tailwind.config.js

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [jsPDF](https://github.com/parallax/jsPDF)
- [Coolors Palette](https://coolors.co/palette/03045e-0077b6-00b4d8-90e0ef-caf0f8)

---

> Built with ❤️ by Suraj (https://github.com/Suraj-22-12)
