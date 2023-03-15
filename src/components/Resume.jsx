import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import UseFolio from '../hooks/UseFolio';

import WhatICanDo from './WhatICanDo';
import Line from './Line';

// SVG 

import react from '../img/icon/react.svg';
import node from '../img/icon/node.svg';
import js from '../img/icon/js.svg';
import php from '../img/icon/php.svg' ;
import sass from '../img/icon/sass.svg';
import tailwind from '../img/icon/tailwind.svg';
import git from '../img/icon/git.svg';

import dominicanFlag from '../img/Dominican.png';
import unitedFlag from '../img/united.png';

function Resume() {
    const { setActualSeccion } = UseFolio();

    //Header state
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .5,
    });

    useEffect(() => {

        if (inView) {
            setActualSeccion('Resume')

        }
    }, [inView]);

    return (
        <>
            <section id='Resume' className='contenedor resume vh100' ref={ref}>

                <div>
                    <div className='skills' data-aos="fade-right">

                        <h3 className='skills-title'>Software Skills</h3>

                        <div className='skills-icons'>

                            <div className='skills-icon'>
                                <p>React</p>
                                <img className='icon-image' src={react} width={40} height={40} alt="Icono node" />
                            </div>

                            <div className='skills-icon'>
                                <p>Node JS</p>
                                <img className="icon-image" src={node} width={40} height={40} alt="Icono node" />
                            </div>

                            {/*  */}

                
                            <div className='skills-icon'>
                                <p>JS</p>
                                <img className="icon-image" src={js} width={40} height={40} alt="Icono node" />
                            </div>

                            <div className='skills-icon'>
                                <p>PHP</p>
                                <img className="icon-image" src={php} width={40} height={40} alt="Icono node" />
                            </div>

                            <div className='skills-icon'>
                                <p>SASS</p>
                                <img className="icon-image" src={sass} width={40} height={40} alt="Icono node" />
                            </div>

                            <div className='skills-icon'>
                                <p>TailwindCss</p>
                                <img className="icon-image" src={tailwind} width={40} height={40} alt="Icono node" />
                            </div>


                            <div className='skills-icon'>
                                <p>Git</p>
                                <img className="icon-image" src={git} width={40} height={40} alt="Icono node" />
                            </div>


                        </div>

                    </div>

                    {/* Icons FINISH */}

                    <div className='education' data-aos="fade-right">
                        <h3 className='education-title'>Education</h3>

                        <div className='education-inst'>
                            <h4 className='software'>Tec. Software Developer &#8212; 2023 - <span>TODAY</span>  </h4>
                            <p className='itla'>Instituto Tecnológico de Las Américas - ITLA</p>

                        </div>

                        {/* Udemy */}
                        <div className='education-inst'>

                            <h4 className='software'>

                                Desarrollo Web Completo con HTML5,  CSS3,  JS  AJAX  PHP y MySQL
                                <span>  +83h</span>

                            </h4>
                            <p className='itla'>Udemy</p>

                        </div>

                        <div className='education-inst'>

                            <h4 className='software'> JavaScript Moderno Guía Definitiva Construye +20 Proyectos
                                <span>  +50h</span>  </h4>
                            <p className='itla'>Udemy</p>

                        </div>

                        <div className='education-inst'>

                            <h4 className='software'>  React - La Guía Completa: Hooks Context Redux MERN +15 Apps <span>  +67h</span>  </h4>
                            <p className='itla'>Udemy</p>

                        </div>

                    </div>

                    {/* Education Section  */}

                    <div className='languages' data-aos="fade-up">
                        <h4 data-aos="zoom-in"> languages</h4>

                        <div className='flag'>
                            <img width={40} height={40} src={dominicanFlag} alt="Flag from dominican" />
                            <p>Spanish <span>Native</span></p>
                        </div>

                        <div className='flag'>
                            <img width={40} height={40} src={unitedFlag} alt="Flag from dominican" />
                            <p>English <span>Intermediate</span></p>
                        </div>


                    </div>

                    {/* Languagues Section  */}


                </div>

                <Line />

                <WhatICanDo />

            </section>

        </>
    )
}

export default Resume