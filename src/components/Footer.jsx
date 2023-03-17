import { useState, useEffect } from 'react';
import linkedin from '/icon/linkedin.svg';
import instagram from '/icon/instagram.svg';
import telegram from '/icon/telegram.svg';
import git from '/icon/github.svg';
import arrow from '../img/icon/arrowUp.svg'


function Footer({ visible }) {

  const [animar, setAnimar] = useState(false);
  const [animarSalidad, setSalidad] = useState(false)

  // Detect if scroll is >= 100

  useEffect(() => {

    if (visible) {
      setTimeout(() => {

        setAnimar(true);

      }, 100);

    } else {
      setTimeout(() => {

        setAnimar(false);

      }, 100);

    }
  });

  // Button to the top

  const handleTop = () => {

    const options = {
      top: 0,
      behavior: "smooth"
    }


    window.scrollTo(options)
  }

  return (
    <div className="footer contenedor" >

      <div className="media">
        <a href="https://github.com/Aneudypq2004" target={'_blank'} ><img src={git} width={48} height={48} alt="Social Media" /></a>
        <a href="/" target={'_blank'}><img src={linkedin} alt="Social Media" /></a>
        <a href="https://www.instagram.com/aneudypq" target={'_blank'} ><img src={instagram} width={48} height={48} alt="Social Media" /></a>
        <a href="https://t.me/Aneudypq2004" target={'_blank'} ><img src={telegram} width={48} height={48} alt="Social Media" /></a>
      </div>

      {/* conditional arrow  */}



      <div className={`arrow ${animar ? 'arrow-visible' : ''}  ${visible ? 'visible' : ''}`} onClick={handleTop}>
        <img className='' src={arrow} alt="Scroll to the top" width={40} height={40} />
      </div>

    </div>
  )
}

export default Footer