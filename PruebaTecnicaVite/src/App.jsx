import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Popular from './components/Popular/Popular';

import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Popular />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
