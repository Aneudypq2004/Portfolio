import { handleScroll } from "../Helpers/Helpers";
import { useEffect, useState } from "react";
import UseFolio from "../hooks/UseFolio";
import menu from '../img/icon/menu.svg'
import close from '../img/icon/close.svg'
import logo from '../img/logo.svg'


function Header() {

  const { actualSeccion, setActualSeccion } = UseFolio();
  const [open, setOpen] = useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className='header' data-aos="fade-left">

        <div className="logo">

          <a href='#Home'

            onClick={(e) => {
              handleScroll(e)
            }}

          ><img src={logo} alt="Menu-Icon" width={30} height={30} />

          </a>


        </div>


        <div className={`header-nav ${open ? 'nav_open ' : 'close'}`}>

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

          <a href='#contact'

            className={actualSeccion === 'contact' ? 'actual' : ''}

            onClick={(e) => {
              handleScroll(e)
            }}

          >Contact</a>

        </div>

        <img onClick={handleMenu} className="menu" src={open ? close : menu} alt="Menu-Icon" width={30} height={30} />


      </div>


    </>

  )
}

export default Header