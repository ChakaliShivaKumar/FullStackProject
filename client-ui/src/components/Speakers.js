import React, { useEffect, useState } from 'react'

function Speakers(params) {

    function chgName(e){
        params.name(e);
        params.chgModel(true);
    }

  return (
    <div className='speakers-main' id='speakers'>
        {
            params.products.map(x=>
                <div className="image">
                <img src={require(`../images/${x.src}`)} alt="Speaker1" className="speaker-image"/>
                <div className="speaker-details">
                    <h2 className="speaker-name">{x.firstName+' '+x.lastName}</h2>
                    <h2 className="speaker-company">{x.company}</h2>
                    <a><img src={require('../images/share.png')} alt="share" className="sharebutton" onClick={(e)=>chgName(x.firstName+' '+x.lastName)}/></a>
                </div>
                </div>
            )
        }
    </div>
  )
}

export default Speakers