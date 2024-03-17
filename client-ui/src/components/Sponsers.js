import React from 'react'

function Sponsers() {
  return (
    <div className='sponsers' id='sponsers'>
        <header>
            <div><h2>04</h2></div>
            <div><h2>SPONSORS</h2></div>
        </header>
        <main>
                <div className="icondiv">
                    <img src={require('../images/vide.png')} alt="icon1"/>
                </div>
                <div className="icondiv">
                    <img src={require('../images/stay-kings.png')} alt="icon2"/>
                </div>
                <div className="icondiv">
                    <img src={require('../images/vv.png')} alt="icon3"/>
                </div>
                <div className="icondiv">
                    <img src={require('../images/Uprimepng.png')} alt="icon4"/>
                </div>
                <div className="icondiv">
                    <img src={require('../images/Itec.png')} alt="icon5"/>
                </div>
        </main>
    </div>
  )
}

export default Sponsers