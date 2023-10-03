import './Series.css'
import { useEffect, useState } from 'react';
import jsonData from '../../../sample.json'
import Popular from '../../components/Popular/Popular'


const Series = () => {
  const [series, setSeries] = useState([]);
  const [modalAbrir, setModalAbrir] = useState(false);
  const [seleccionarSeries, setSeleccionarSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    try {
      const entrada = jsonData.entries;

      const filtrarSeries = entrada.filter((entry) => {
        return entry.programType === "series" && entry.releaseYear >= 2010
      })

      const alfabetico = filtrarSeries.sort((a, b) => {
        return a.title.localeCompare(b.title);
      })


      setTimeout(() => {
        setSeries(alfabetico);
        setLoading(false);
      }, 2000)
    } catch (error) {
      setError(error.message);
    }
  }, [])

  const clickCard = (entry) => {
    setSeleccionarSeries(entry);
    setModalAbrir(true);
  }

  const cerrarModal = () => {
    setModalAbrir(null);
  }

  return (
    <div className='generall'>
      <Popular title="Series" />
      {
      error ?(
          <div className="errorr mensaje">Oops , something went  wrog</div>
        ):  
      loading ? (
        <div className="loading-indicator mensaje">Loading...</div>
      ) : (
        <>
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
              <button className='card__button' onClick={() => cerrarModal()}>Salir</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Series;
