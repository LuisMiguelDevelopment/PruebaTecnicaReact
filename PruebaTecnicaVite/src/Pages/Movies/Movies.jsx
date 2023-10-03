import { useEffect, useState } from 'react'
import './Movies.css'
import jsonData from '../../../sample.json'
const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const entrada = jsonData.entries;

    const moviesData = entrada.filter((entry) => entry.programType == "movie")

    setMovies(moviesData)

  }, [])

  return (
    <div>
      <div className="cards">
        {movies.map((entry) => (
          <div className='card' key={entry.title}>
              <img className='card__img' src={entry.images["Poster Art"].url} alt="" />
              <p className='card__p'>{entry.title}</p>
          </div>
         
        ))}
      </div>

    </div>
  )
}

export default Movies