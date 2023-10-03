import './Footer.css'
import facebook from '../../assets/social/facebook-white.svg'
import twitter from '../../assets/social/twitter-white.svg'
import instagram from '../../assets/social/instagram-white.svg'

import appStore from '../../assets/store/app-store.svg'
import googlePlay from '../../assets/store/play-store.svg'
import microsoftStore from '../../assets/store/Windows-store.svg'

const Footer = () => {
  return (
    <div className='general'>
      <div className="footer">
        <div className="footer__header">
          <ul className="footer__ul">
            <li className="footer__li"><a href="">Home</a></li>
            |
            <li className="footer__li"><a href="">Terms and Conditions</a></li>
            |
            <li className="footer__li"><a href="">Privacy Policy</a></li>
            |
            <li className="footer__li"><a href="">Collection Statement</a></li>
            |
            <li className="footer__li"><a href="">Help</a></li>
            |
            <li className="footer__li"><a href="">Manage Account</a></li>
          </ul>
          <p className='footer__p'>Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
        </div>
        <div className="footer__container-redesApp">
          <div className="footer__redes">
            <img src={facebook} alt="" className="footer__redes--img" />
            <img src={twitter} alt="" className="footer__redes--img" />
            <img src={instagram} alt="" className="footer__redes--img" />
          </div>
          <div className="footer__app">
            <img src={appStore} alt="" className="footer__app-img" />
            <img src={googlePlay} alt="" className="footer__app-img" />
            <img src={microsoftStore} alt="" className="footer__app-img" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer