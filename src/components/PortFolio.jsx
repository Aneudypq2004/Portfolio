import React, { useEffect } from 'react'
import UseFolio from '../hooks/UseFolio'
import { useInView, InView } from 'react-intersection-observer';
import git from '/icon/github.svg';
import open from '../img/icon/arrow-up-right.svg';

//Image

import project1 from '../img/project1.png';
import project1Webp from '../img/project1.webp';
import project1Avif from '../img/project1.avif';

import project2 from '../img/project2.png';
import project2Webp from '../img/project2.webp';
import project2Avif from '../img/project2.avif';

import project3 from '../img/project3.png';
import project3Webp from '../img/project3.webp';
import project3Avif from '../img/project3.avif';

import project4 from '../img/project4.png';
import project4Webp from '../img/project4.webp';
import project4Avif from '../img/project4.avif';



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

            <picture>

              <source srcSet={project1Avif} type="image/avif" />
              <source srcSet={project1Webp} type="image/webp" />
              <img src={project1} alt="Image Project" />

            </picture>


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

          <article className='project' data-aos="fade-right">

            <picture>

              <source srcSet={project2Avif} type="image/avif" />
              <source srcSet={project2Webp} type="image/webp" />
              <img src={project2} alt="Image Project" />

            </picture>

            <div className="project_content">

              <div className='project_content_title'>

                <h4>Rick and Morty</h4>

                <div className='project_icon'>

                  <a target={'_blank'} href="https://filtrador-de-personajes-rick-and-morty.vercel.app"><img src={git} alt="Icon Git" width={20} height={20} /></a>
                  <a target="_blank" href="https://nimble-torte-015838.netlify.app"><img src={open} alt="Icon Git" width={20} height={20} /></a>

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
                <li>RICK AND MORTY API</li>
                <li>Tailwindcss</li>
                <li>Vite</li>

              </ul>

            </div>

          </article>
        </div>

        {/* Second Column Project  */}

        <div>

          {/* Project 3  */}

          <article className='project' data-aos="fade-right">

            <picture>

              <source srcSet={project3Avif} type="image/avif" />
              <source srcSet={project3Webp} type="image/webp" />
              <img src={project3} alt="Image Project" />

            </picture>

            <div className="project_content">

              <div className='project_content_title'>

                <h4>Patient Manager</h4>

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


          {/* Project 4 */}

          <article className='project' data-aos="fade-right">

            <picture>

              <source srcSet={project4Avif} type="image/avif" />
              <source srcSet={project4Webp} type="image/webp" />
              <img src={project4} alt="Image Project" />

            </picture>


            <div className="project_content">

              <div className='project_content_title'>

                <h4>Cotizador de Prestamos</h4>

                <div className='project_icon'>

                  <a target={'_blank'} href="https://github.com/Aneudypq2004/Cotizador-de-prestamos--REACT"><img src={git} alt="Icon Git" width={20} height={20} /></a>
                  <a target="_blank" href="https://nimble-torte-015838.netlify.app"><img src={open} alt="Icon Git" width={20} height={20} /></a>

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

        </div>
        {/* Fin second column */}
      </section>
    </>
  )
}
