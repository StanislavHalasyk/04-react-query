import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${`eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDEwYjVlYmE5MjNlOWM5YmI4ODNjMzIyYzNhYjJmNSIsIm5iZiI6MTc2MjY4NjY4OC40NDEsInN1YiI6IjY5MTA3NmUwMzEyZWNkMjk4ODlhYmVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0_-dydqzIaBZNMVX5qILGODqaRaWyD35imWfeYDmTks`}`,
  },
});
