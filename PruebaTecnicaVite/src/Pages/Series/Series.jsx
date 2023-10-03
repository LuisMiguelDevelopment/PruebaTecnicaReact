import './Series.css'
import { useEffect, useState } from 'react';
import jsonData from '../../../sample.json'

const Series = () => {
  const [series, setSeries] = useState([]);
  const [modalAbrir, setModalAbrir] = useState(false);
  const [seleccionarSeries, setSeleccionarSeries] = useState(null);

  useEffect(() => {
    const entrada = jsonData.entries;

    const filtrarSeries = entrada.filter((entry) => {
      return entry.programType === "series" && entry.releaseYear >= 2010
    })

    const alfabetico = filtrarSeries.sort((a, b) => {
      return a.title.localeCompare(b.title);
    })

    setSeries(alfabetico)

  }, [])

  const clickCard = (entry) => {
    setSeleccionarSeries(entry);
    setModalAbrir(true); 
  }

  const cerrarModal = () =>{
    setModalAbrir(null); 
  }

  return (
    <div>
      <div className="cards">
        {series.map((entry) => (
          <div onClick={() => clickCard(entry)} className='card' key={entry.title}>
            <img className='card__img' src={entry.images["Poster Art"].url} alt="" />
            <p className='card__p'>{entry.title}</p>
          </div>
        ))}
      </div>
      {modalAbrir && seleccionarSeries && (
        <div className="modal">
          <h2 className='modal__h2'>{seleccionarSeries.title}</h2>
          <p className='modal__p'>{seleccionarSeries.description}</p>
          <p className='modal__p'>{seleccionarSeries.releaseYear}</p>
          <img className='card__img' src={seleccionarSeries.images["Poster Art"].url} alt="" />
          <button className='card__butoon' onClick={() => cerrarModal()}>Salir</button>
        </div>
      )}
    </div>
  )
}

export default Series;
