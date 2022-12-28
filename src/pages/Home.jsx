import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import './MoviesGrid.css';


const Movie = () => {

  const [topFilmes, setTopFilmes] = useState([]);

  const getTopRateFilmes = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setTopFilmes(data.results);

  };

  useEffect(() => {

    const topRateUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRateFilmes(topRateUrl);

  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>

      <div className="movies-container">
        {topFilmes.length == 0 && <p>Carregando...</p>}
        {topFilmes.length > 0 && topFilmes.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Movie