import './Navbar.css'

const Navbar = () => {
  return (
    <div className='general'>
        <div className="header">
            <div className="header__logo">
                <h1 className="header__h1">DEMO Streaming</h1>
            </div>
            <div className="heder__login">
               <a className='header__a' href="">Log in</a>
               <button className="header__button">
                  Start your  free trial
               </button>
            </div>
        </div>
        <div className="header2">
          <h2 className='header2__h1 header__h1 '>POPULAR MOVIES</h2>
        </div>
    </div>
  )
}

export default Navbar