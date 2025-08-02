// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Function to recommend movies based on minRating (default: 8)
const recommend = ({ rating }, minRating = 8) => rating >= minRating;

// 2. Filter movies with rating ≥ 8
const recommendedMovies = movies.filter(movie => recommend(movie));

// 3. Format: "Inception (Sci-Fi) - 8.8 ⭐"
const formattedMovies = recommendedMovies.map(
  ({ title, genre, rating }) => `${title} (${genre}) - ${rating} ⭐`
);

// 4. Display the results in HTML
const output = `
  <h2>Recommended Movies (Rating ≥ 8)</h2>
  <ul>
    ${formattedMovies.map(movie => `<li>${movie}</li>`).join("")}
  </ul>
`;

document.body.innerHTML += output;
