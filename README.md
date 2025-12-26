# 🎬 MovieScope

MovieScope is a **movie search and discovery application** built with **HTML, CSS, and JavaScript**, using **The Movie Database (TMDb) API** to fetch movie data.  
By default, the app displays the **top 20 popular movies**. Users can search for any movie using the search bar, and the results are dynamically displayed. Each movie appears as a **card** containing its poster, title, and IMDb rating, with ratings color-coded as **red, yellow, or green**.

The project emphasizes a **clean, modular, and responsive design**, ensuring it works perfectly on both desktop and mobile devices.

---

## 🚀 Features

- 🔍 Search movies by title
- 🎞️ Display top 20 popular movies by default
- 🃏 Each movie is shown as a card with:
  - Poster image
  - Movie title
  - IMDb rating (color-coded: red, yellow, green)
- 🌐 Full responsiveness for all screen sizes
- 🧼 Clean and modular code structure:
  - `api.js` handles all API requests
  - `main.js` handles DOM rendering and event handling
- 🆓 Users can run the project after adding their **TMDb API token** to `api.js`

---

## 🧠 Application Logic

1. On page load, the app fetches the **top 20 popular movies** from TMDb.
2. Each movie is displayed as a card with poster, title, and rating.
3. Users can type a movie name into the search bar.
4. JavaScript sends a **search API request** to TMDb.
5. The results dynamically replace the default popular movies.
6. IMDb ratings are color-coded:
   - **Red** → Low rating
   - **Yellow** → Medium rating
   - **Green** → High rating

---

## 🎨 Tech Stack

- HTML5
- CSS3 (fully responsive)
- Vanilla JavaScript
- TMDb API for movie data

---

## 🎥 Preview

![1](1.png)
![2](2.png) 
![3](3.png)

---

## ⚠️ API Token Setup

To run the project, you need a **TMDb API token**:

1. Visit [TMDb](https://www.themoviedb.org/)
2. Sign up for a free account
3. Go to your **API settings** and generate a token
4. Open `api.js`
5. Paste your token in the Authorization header:

```javascript
Authorization: "Bearer YOUR_API_TOKEN_HERE"
