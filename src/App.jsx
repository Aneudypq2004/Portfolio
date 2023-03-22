import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from './components/Contact';


import { handleScroll } from './Helpers/Helpers';
import PortFolio from './components/PortFolio';
import UseFolio from './hooks/UseFolio';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

//Library
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
Aos.init({
  once: true
})


function App() {

  const { actualSeccion, setActualSeccion } = UseFolio();
  const [visible, setVisible] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */

    threshold: .5,
  });

  useEffect(() => {

    if (inView) {
      setActualSeccion('Home');
      setVisible(false)

    } else {
      setVisible(true)
    }
  }, [inView])



  return (
    <>

      <Header />

      <main className="background-img" ref={ref} >

        <div className="contenedor flex vh100" data-aos="fade-down" id='Home'>
          <div className='content '>

            <h1 className='name'><span>&lt;Luis Aneudy</span>  De Los Santos /&gt;</h1>
            <p className='job'>Software Developer</p>

            <div className="botons">

              {/* Resume boton */}

              <a href='#Resume'

                className={`boton btn-neon`}

                onClick={(e) => {
                  handleScroll(e)
                  setActualSeccion('Resume')
                }}

              >
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span> Resume </a>

              {/* PortFolio Boton */}

              <a href='#Portfolio'

                className={`boton btn-neon ml-3`}

                onClick={(e) => {
                  handleScroll(e)
                  setActualSeccion('Portfolio')
                }}

              >
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Portafolio </a>


            </div>



          </div>

          {/* <Tecnology /> */}


          {/* <div className="media_principal">
            <a href="https://github.com/Aneudypq2004" target={'_blank'} ><img src={git} width={48} height={48} alt="Social Media" /></a>
            <a href="/" target={'_blank'}><img src={linkedin} alt="Social Media" /></a>
            <a href="https://www.instagram.com/aneudypq" target={'_blank'} ><img src={instagram} width={48} height={48} alt="Social Media" /></a>
            <a href="https://t.me/Aneudypq2004" target={'_blank'} ><img src={telegram} width={48} height={48} alt="Social Media" /></a>
          </div> */}

        </div>


      </main>

      {/* section About me  */}
      <AboutMe />

      {/* Section Resume */}

      <Resume />

      <PortFolio />

      <div data-aos="fade-down" data-aos-delay="1000" data-aos-easing="ease-in-out"
      >
        <Contact />

      </div>


      <Footer visible={!inView} />
    </>
  )
}

export default App
