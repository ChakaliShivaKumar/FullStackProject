import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function NavBar() {
  return (
        <nav>
            <ul>
                <label htmlFor="home-menu-bar"><i className="fa-solid fa-xmark"></i></label>
                <li><Link to="/">Home</Link></li>
                <li><HashLink href="/#about">About</HashLink></li>
                <li><HashLink to="/#speakers">Speakers</HashLink></li>
                <li><HashLink to="/#schedule">Schedule</HashLink></li>
                <li><HashLink to="/#info">Info</HashLink></li>
                <li><HashLink to="/#sponsers">Sponsers</HashLink></li>
            </ul>
        </nav>
  )
}

export default NavBar