import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import About from './About'
import Speakers from './Speakers'
import Schedule from './Schedule'
import Info from './Info'
import Sponsers from './Sponsers'
import Footer from './Footer'
import Model from './Model'
import {Link} from 'react-router-dom'

function Home(params) {
    var [userName, changeName] = useState('HARMONY GRINGER');
    var [modelOn,chgModel] = useState(false)


  return (
    <div className='container'>
        <div className="home">
        <input type="checkbox" id="home-menu-bar" className='home-menu-bar'/>
        <a href="#"><img src={require('../images/Link.png')} alt="Logo"/></a>
        <a className="home-icon">
            <label htmlFor="home-menu-bar"><i className="fa-solid fa-bars fa-2xl"></i></label>
        </a>
        <div className='home-nav'>
            <NavBar/>
        </div>
        <div className='home-main'>
            <div>
                <h1>WOMEN</h1>
                <h1></h1>
                <h1>TECH PRESENT :</h1>
            </div>
            <div className='home-main-location'>
                <div className='home-main-location-name'>
                    <h3>THE INSPIRE SUMMIT</h3>
                </div>
                <div className="home-main-location-place">
                    <div className='home-main-location-place-time'>
                        <div>Apr 18, 2035 8:30 AM</div>
                    </div>
                    <div className='home-main-location-place-address'>
                        <div>San Fransisco</div>
                    </div>
                </div>
                <button className="home-main-get-tickets-btn"><Link to='/ticketbooking'>Get Tickets</Link></button>
            </div>
        </div>
    </div>
    <About/>
    <div className='speakers'>
    <Speakers products={params.products} name={changeName} chgModel={chgModel} modelOn={modelOn}/>
    </div>
    <Schedule/>
    <Info/>
    <Sponsers/>
    <Footer/>
    <Model name={userName} modelOn={modelOn} chgModel={chgModel}/>
    </div>
  )
}

export default Home