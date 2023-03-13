import photo from '/person.avif';
import Line from './Line';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import UseFolio from '../hooks/UseFolio';

function AboutMe() {

  const { setActualSeccion } = UseFolio()

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .7,
  });

  useEffect(() => {

    if (inView) {
      setActualSeccion('Me')
    }

  }, [inView])




  return (
    <>
      <section className='contenedor flex about' id='Me' >

        <div className="about-email" ref={ref}>

          <h3 className='title' data-aos="fade-up" >About</h3>

          <p data-aos="fade-right" >Dluisaneudy82@gmail.com</p>

          <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. V
            oluptatum voluptate et ut officiis dicta debitis quasi ipsam eius dolores laboriosam q
            uos hic pariatur ipsum delectus vitae harum, assumenda alias! Debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            et error velit quisquam assumenda itaque!</p>

        </div>

        <Line />

        {/* Photo */}

        <div className="about-photo" >
          
          <img lazy="loading" src={photo}  alt="Person Photo" 

          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000" />

        </div>

      </section>

    </>
  )
}

export default AboutMe