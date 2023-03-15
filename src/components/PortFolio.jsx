import React, { useEffect } from 'react'
import UseFolio from '../hooks/UseFolio'
import { useInView, InView } from 'react-intersection-observer';
import Line from './Line';

//Image

import project1 from '../img/project1.png';


export default function PortFolio() {

  const { actualSeccion, setActualSeccion } = UseFolio();

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {

    if (inView) {
      setActualSeccion('Portfolio')

    }

  }, [inView])



  return (
    <>

      <h1 className='project_title' id='Portfolio'>Some Projects</h1>

      <section  ref={ref} className='portfolio' >

        <div>

          <article className='project'>

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <h4>Cotizador criptomonedas</h4>

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



          <article className='project'>

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <h4>Cotizador criptomonedas</h4>

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
          <article className='project'>

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <h4>Cotizador criptomonedas</h4>

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

        {/* Second Column Project  */}

        <div>

          <article className='project'>

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <h4>Cotizador criptomonedas</h4>

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

          <article className='project'>

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <h4>Cotizador criptomonedas</h4>

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

          {/* 6 Project */}


          <article className='project'>

            <img src={project1} alt="Project Image" />

            <div className="project_content">

              <h4>Cotizador criptomonedas</h4>

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

      </section>
    </>
  )
}
