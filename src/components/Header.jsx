import { handleScroll } from "../Helpers/Helpers";
import { useEffect, useState } from "react";
import UseFolio from "../hooks/UseFolio";


function Header() {

  const {actualSeccion, setActualSeccion} = UseFolio()

  return (
    <div className='header'>

      <div className='header-nav'>

        <a href='#Home'

          className={actualSeccion === 'Home' ? 'actual' : ''}

          onClick={(e) => {
            handleScroll(e)
          }}

        >Home</a>

        <a href='#Me'

          onClick={(e) => {
            handleScroll(e)
          }}

          className={actualSeccion === 'Me' ? 'actual' : ''}

        >About me</a>

        <a href='#Resume'
          className={actualSeccion === 'Resume' ? 'actual' : ''}

          onClick={(e) => {
            handleScroll(e)
         
          }}

        >Resume</a>

        <a href='#Portfolio'

          className={actualSeccion === 'Portfolio' ? 'actual' : ''}

          onClick={(e) => {
            handleScroll(e)
          }}

        >Portfolio</a>

      </div>
    </div>
  )
}

export default Header