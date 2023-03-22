import React, { useEffect } from 'react'
import UseFolio from '../hooks/UseFolio'
import { useInView, InView } from 'react-intersection-observer';
import git from '/icon/github.svg';
import open from '../img/icon/arrow-up-right.svg';

//Image

import project1 from '../img/project1.png';


export default function PortFolio() {

  const { actualSeccion, setActualSeccion } = UseFolio();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {

    if (inView) {
      setActualSeccion('Portfolio')

    }

  }, [inView])



  return (
    <>

      <h1 className='project_title' id='Portfolio'>Some Projects</h1>

      <section ref={ref} className='portfolio' >

        <div>

          {/* Project 1 */}

          <article className='project' data-aos="fade-right">

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <div className='project_content_title'>

              <h4>Cotizador criptomonedas</h4>

               <div className='project_icon'>

                <a target={'_blank'} href="https://github.com/Aneudypq2004/Cotizador-de-criptomonedas"><img src={git} alt="Icon Git" width={20} height={20} /></a>
                <a target="_blank" href="https://classy-kringle-3e9c20.netlify.app/"><img src={open} alt="Icon Git" width={20} height={20} /></a>

               </div>


              </div>


              <p className='project_description'>
                Lorem ipsum dolor,
                sit amet consectetur adipisicing elit.
                Porro, inventore! Vitae earum
                molestiae voluptatem provident rerum, explicabo nobis ea quam.</p>

              {/* Used Tecnologies */}

              <ul>
                <li>React</li>
                <li>Sass</li>
                <li>ApiCompare</li>

              </ul>

            </div>

          </article>

          {/* Second Project  */}





        </div>

        {/* Second Column Project  */}

        <div>

       

        </div>
      </section>
    </>
  )
}
