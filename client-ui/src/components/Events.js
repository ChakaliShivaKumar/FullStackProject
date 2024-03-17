import React, { useEffect, useState } from 'react'
import Footer from './Footer'

function Events() {
    var [workshops,chgWorkshops] = useState([])
    var [comedy, chgComedy] = useState([])
    var [kids, chgKids] = useState([])
    var [music, chgMusic] = useState([])
    var [sports, chgSports] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const response = await fetch('https://655c32f6ab37729791aa0bd5.mockapi.io/events');
            const jsonData = await response.json();
            chgWorkshops(jsonData.filter(x=>{
                return x.type=='workshops';
            }))
            chgComedy(jsonData.filter(x=>{
                return x.type=='comedy-shows';
            }))
            chgKids(jsonData.filter(x=>{
                return x.type=='Kids';
            }))
            chgMusic(jsonData.filter(x=>{
                return x.type=='Music';
            }))
            chgSports(jsonData.filter(x=>{
                return x.type=='Sports';
            }))
        }
        getData();
    },[])
  return (
    <div className='container'>
        <header id="home">
            <input type="checkbox" id="iconsym"/>
            <a href="javascript:void(0);" className="icon">
                <label htmlFor="iconsym"><i className="fa-solid fa-bars fa-2xl"></i></label>
            </a>
            <div className="search-container">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </div>
            <nav id="navbar">
                <ul>
                    <label htmlFor="iconsym"><i className="fa-solid fa-xmark"></i></label>
                    <li><a href="events.html">Home</a></li>
                    <li><a href="#events-type">Events</a></li>
                    <li><a href="events.html">Info</a></li>
                </ul>
            </nav>
        </header>
        <div className="slideshow-container">
            <div id="slideshow">
                    <div className="slide-wrapper">
                    <div className="slide"><img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00376014-mffuhsreww-portrait.jpg"/></div>
                    <div className="slide"><img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375927-shthtjlrvc-portrait.jpg"/></div>
                    <div className="slide"><img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VHVlLCAyMSBOb3Ygb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00353344-pcmtyunsng-portrait.jpg" /></div>
                    <div className="slide"><img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNiBOb3Y%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00375927-shthtjlrvc-portrait.jpg"/></div>
                    </div>
            </div>
        </div>
        <div class="event-type-container" id="events-type">
            <h3 class="go-to">Go To</h3>
            <div class="event-types">
                <div class="event"><a href="#workshops-container">Worshops</a></div>
                <div class="event"><a href="#comedy-container">Comedy</a></div>
                <div class="event"><a href="#kids-container">Kids</a></div>
                <div class="event"><a href="#music-container">Music</a></div>
                <div class="event"><a href="#sports-container">Sports</a></div>
            </div>
        </div>
        <div class="event-container-header">
            <h3>Workshops</h3>
            <a href="#" class="view-link">view all</a>
        </div>
        <div class="workshops-container event-class" id="workshops-container">
            {
                workshops.slice(0,4).map(x=>
                    <div class="card">
                        <div class="card-image"><img src={x.img} class="card-img"/></div>
                        <div class="card-body">
                            <div class="card-title">{x.name}</div>
                            <div class="location">{x.location}</div>
                            <div class="time">{x.time}</div>
                            <div class="price">{x.price}</div>
                        </div>
                    </div>
                )
            }
        </div>
        <div class="event-container-header">
        <h3>Comedy</h3>
        <a href="#" class="view-link">view all</a>
        </div>
        <div class="comedy-container event-class" id="comedy-container">
            {
                comedy.slice(0,4).map(x=>
                    <div class="card">
                        <div class="card-image"><img src={x.img} class="card-img"/></div>
                        <div class="card-body">
                            <div class="card-title">{x.name}</div>
                            <div class="location">{x.location}</div>
                            <div class="time">{x.time}</div>
                            <div class="price">{x.price}</div>
                        </div>
                    </div>
                )
            }
        </div>
        <div class="event-container-header">
            <h3>Kids</h3>
            <a href="#" class="view-link">view all</a>
        </div>
        <div class="kids-container event-class" id="kids-container">
            {
                kids.slice(0,4).map(x=>
                    <div class="card">
                        <div class="card-image"><img src={x.img} class="card-img"/></div>
                        <div class="card-body">
                            <div class="card-title">{x.name}</div>
                            <div class="location">{x.location}</div>
                            <div class="time">{x.time}</div>
                            <div class="price">{x.price}</div>
                        </div>
                    </div>
                )
            }
        </div>
        <div class="event-container-header">
            <h3>Music</h3>
            <a href="#" class="view-link">view all</a>
        </div>
        <div class="music-container event-class" id="music-container">
            {
                music.slice(0,4).map(x=>
                    <div class="card">
                        <div class="card-image"><img src={x.img} class="card-img"/></div>
                        <div class="card-body">
                            <div class="card-title">{x.name}</div>
                            <div class="location">{x.location}</div>
                            <div class="time">{x.time}</div>
                            <div class="price">{x.price}</div>
                        </div>
                    </div>
                )
            }
        </div>
        <div class="event-container-header">
            <h3>Sports</h3>
            <a href="#" class="view-link">view all</a>
        </div>
        <div class="sports-container event-class" id="sports-container">
            {
                sports.slice(0,4).map(x=>
                    <div class="card">
                        <div class="card-image"><img src={x.img} class="card-img"/></div>
                        <div class="card-body">
                            <div class="card-title">{x.name}</div>
                            <div class="location">{x.location}</div>
                            <div class="time">{x.time}</div>
                            <div class="price">{x.price}</div>
                        </div>
                    </div>
                )
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Events