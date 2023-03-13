import React, { useEffect } from 'react'
import UseFolio from '../hooks/UseFolio'
import { useInView, InView } from 'react-intersection-observer'


export default function PortFolio() {

    const { actualSeccion, setActualSeccion } = UseFolio();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
      useEffect(() => {
    
        if(inView){
          setActualSeccion('Portfolio')
          
        }
      
      }, [inView])
    
    

    return (
        <>
            <section id='Portfolio' ref={ref}  className='flex contenedor'></section>
        </>
    )
}
