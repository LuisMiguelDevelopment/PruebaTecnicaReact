import './Home.css'
import img from '../../assets/placeholder.png'
import{Link} from 'react-router-dom'
import Popular from '../../components/Popular/Popular'
const Home = () => {
  return (
    <main>
       <Popular title="Titles"/>
       <div className='general'>
      
      <div className="cards__popular">
          <Link to="/series" className="cardd">
              <img className='card__imgg' src={img} alt="" />
              <span className="card__span">Series</span>
          </Link>
          <Link to="/movies" className="cardd">
              <img className='card__imgg' src={img} alt="" />
              <span className="card__span">Movies</span>
          </Link>
      </div>
    </div>
    </main>
   
  )
}

export default Home