# 🎂 Age Calculator Web App

A responsive and visually appealing web application that allows users to calculate their **exact age** in years, months, and days. Built with **HTML, CSS (pastel + glassmorphism UI)** and **JavaScript**, this two-page project enhances both user experience and interaction using modern frontend practices.

## 🔗 Live Demo
> [Click here to view live](https://yourusername.github.io/age-calculator/) <!-- ← Replace with your actual link -->

---

## 📌 Features

- ✨ Pastel-themed glassmorphism user interface
- 📆 User-friendly date picker for Date of Birth
- 📊 Context-aware result display based on age range
- 💡 Smooth transition from Welcome to Calculator page
- 🎉 Mobile responsive layout

---

## 🧱 Tech Stack

| Layer        | Tools Used          |
|--------------|---------------------|
| Structure     | HTML5               |
| Styling       | CSS3 (flexbox, pastel gradients, glassmorphism) |
| Logic         | Vanilla JavaScript (DOM + Date object) |

---

## 📁 File Structure

```
📦 Age-Calculator-Web
├── index.html           # Welcome page
├── calculator.html      # Main age calculator interface
├── style.css            # Shared pastel glassmorphism styles
└── script.js            # JavaScript logic for age calculation
```

---

## 🖼️ Screenshots

### Welcome Page
![Welcome Page](your-image-link-here)

### Calculator Page
![Calculator Page](your-image-link-here)

---

## 📄 Code Overview

### `index.html` (Welcome Page)

- Displays a welcoming message in a pastel background.
- A call-to-action button navigates to `calculator.html`.

```html
<a href="calculator.html" class="btn">Let's Find Out 🎉</a>
```

---

### `calculator.html` (Age Calculator Page)

- Includes a date input field for the user’s Date of Birth.
- On submission, runs a JavaScript function to compute age.
- Outputs contextual feedback like:
  - "Enjoy your youthful days ✨"
  - "Such wonderful life experience 🌟"

---

### `script.js` (JavaScript Logic)

```js
const age = calculateAge(dob, today);
document.getElementById("result").innerHTML = `🎉 You are ${age.years} years, ${age.months} months, and ${age.days} days old.`;
```

- Validates input
- Calculates exact age using `Date` object
- Displays contextual messages based on age group

---

## 🔧 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/age-calculator.git
   cd age-calculator
   ```

2. Open `1st draft.html` in your browser:
   ```bash
   start index.html
   ```

---

## 🙋‍♀️ Author

**P. Anjali**  
Passionate frontend enthusiast, building user-first, beautiful web tools with clean code and vibrant UI.

---

## 📜 License

This project is licensed under the MIT License.
