# 💊 MedVault – Medical Record App

**MedVault** is a modern, responsive web application designed to manage medical records and appointments securely and intuitively. Built with a dark-mode-first aesthetic, MedVault provides users with a seamless, elegant healthcare experience online.

---

## 🚀 Features

### 🌐 General
- Fully responsive design using **Tailwind CSS**
- **Dark mode** enabled by default with a toggle
- Consistent **glassmorphism UI** for navbars, cards, forms, and modals
- Modular, component-based structure

### 🔐 Authentication
- Secure **Login** and **Signup** pages
- Input focus bug fixed for immediate responsiveness
- Route protection for Records and Appointments

### 🧭 Navigation
- Frosted-glass Navbar featuring:
  - MedVault Logo
  - Links to Home, Appointments, Records, About
  - Theme toggle switch
  - Gradient-styled Login/CTA buttons

### 🦸 Hero Section
- Inspired by [this design](https://21st.dev/meschacirung/hero-section-1/default)
- Customized with a **health-themed illustration**
- Bold headline, subtle subtext, and CTA styled for impact

### 📊 Dashboard (Landing Page)
- Health Dashboard with frosted glass cards for:
  - 📊 Health Score
  - 📅 Next Appointment
  - 💊 Medications
- Pulsing green system status indicator
- Responsive across light/dark themes

### 📁 Medical Records Page
- Protected route
- Features:
  - Add, delete, search, and download medical records
  - PDF export using jsPDF
  - Glass-effect containers, animated buttons

### 📅 Appointments
- Booking form (name, symptoms, doctor, date)
- Full-clickable date input
- Login required

### 🔚 Footer
- Navy blue themed in dark mode
- Simple, clean layout matching overall UI

---

## 🛠️ Tech Stack

- HTML5
- Tailwind CSS 3
- JavaScript (Vanilla or React)
- jsPDF (PDF export)
- LocalStorage (ready for backend integration)

---

## 🖼️ Screenshots

_Add screenshots of:_
- Landing Page
- Login Page
- Records Page
- Appointment Page (Dark & Light modes)

---

## 📁 Folder Structure (example)

medvault/
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

> Built with ❤️ by [Suraj](https://github.com/Suraj-22-12)
