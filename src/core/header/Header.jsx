import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {

  return (
    <div className='headcomp'>
        <nav className='headcomp__nv'>
            <Link className='headcomp__nv__active' to="/">Inicio</Link>
            <Link className='headcomp__nv__active' to="/education">Formación</Link>
            <Link className='headcomp__nv__active' to="/experience">Experiencia</Link>
            <Link className='headcomp__nv__active' to="/about">Acerca De</Link>
        </nav>
    </div>
  )
}

export default Header
