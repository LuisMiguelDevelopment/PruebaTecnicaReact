import { useEffect, useState } from 'react'
import './Movies.css'
import jsonData from '../../../sample.json'
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [modalAbrir, setModalAbrir] = useState(false);
  const [seleccionarMovies, setSeleccionarMovies] = useState(null);

  useEffect(() => {
    const entrada = jsonData.entries;

    const filtrarMovies = entrada.filter((entry)=>{
      return entry.programType =="movie" && entry.releaseYear >=2010
    })

    const alfabetico = filtrarMovies.sort((a,b)=>{
      return a.title.localeCompare(b.title);
     })

    setMovies(alfabetico)

  }, [])

  const clickCard = (entry) => {
    setSeleccionarMovies(entry);
    setModalAbrir(true); 
  }

  const cerrarModal = () =>{
    setModalAbrir(null); 
  }

  return (
    <div>
      <div className="cards">
        {movies.map((entry) => (
          <div  onClick={() => clickCard(entry)} className='card' key={entry.title}>
              <img className='card__img' src={entry.images["Poster Art"].url} alt="" />
              <p className='card__p'>{entry.title}</p>
          </div>
         
        ))}
      </div>
      {modalAbrir && seleccionarMovies && (
        <div className="modal">
          <h2 className='modal__h2'>{seleccionarMovies.title}</h2>
          <p className='modal__p'>{seleccionarMovies.description}</p>
          <p className='modal__p'>{seleccionarMovies.releaseYear}</p>
          <img className='card__img' src={seleccionarMovies.images["Poster Art"].url} alt="" />
          <button className='card__butoon' onClick={() => cerrarModal()}>Salir</button>
        </div>
      )}

    </div>
  )
}

export default Movies