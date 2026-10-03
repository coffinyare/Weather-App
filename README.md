# 🌤️ Weather App

A simple and responsive weather application built with **React** and **WeatherAPI**.

Users can search for a city and view its current weather information, including temperature, condition, humidity, and wind speed.

## 🚀 Features

* 🔎 Search weather by city
* 🌡️ Display current temperature
* ☁️ Display weather condition
* 💧 Display humidity
* 💨 Display wind speed
* ⚠️ Show an error when a city is not found
* ⚛️ Built with React
* 🌐 Uses WeatherAPI

## 🛠️ Technologies

* React
* JavaScript
* Vite
* WeatherAPI
* HTML
* CSS

## 📂 Project Structure

```text
Weather-App/
│
├── src/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/coffinyare/Weather-App.git
```

Go into the project folder:

```bash
cd Weather-App
```

Install dependencies:

```bash
npm install
```

## 🔑 Environment Variable

Create a `.env` file in the root of the project:

```env
VITE_API_KEY=your_weather_api_key
```

Replace `your_weather_api_key` with your WeatherAPI key.

> ⚠️ Never upload your real API key to GitHub.

Add `.env` to `.gitignore`:

```text
.env
```

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 🧠 How It Works

The application follows this basic flow:

```text
User enters a city
        ↓
React stores the city
        ↓
fetch() sends a request
        ↓
WeatherAPI returns JSON
        ↓
React receives the data
        ↓
Weather information is displayed
```

## 📡 API Data

The application uses the following WeatherAPI endpoint:

```text
/current.json
```

The app reads information such as:

* City name
* Temperature in Celsius
* Weather condition
* Humidity
* Wind speed

## 📸 Preview

Add a screenshot of your application here:

```markdown
![Weather App Screenshot](screenshot.png)
```

## 📚 What I Learned

Through this project, I practiced:

* React `useState`
* Event handling
* `fetch()`
* `async/await`
* Working with APIs
* JSON data
* Conditional rendering
* Environment variables
* Error handling

## 👨‍💻 Author

**Coffinyare**

GitHub: [@coffinyare](https://github.com/coffinyare)
<img width="332" height="423" alt="Screenshot 2026-10-03 171218" src="https://github.com/user-attachments/assets/5103dcf3-dbfe-4eee-bf87-1b78e65f6b58" />
