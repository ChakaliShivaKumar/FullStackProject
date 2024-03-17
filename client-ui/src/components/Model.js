import React from 'react'

function Model(params) {

    function changeClass(){
        console.log(params.modelOn);
        params.chgModel(false);
    }

    function copyText(e){
        navigator.clipboard.writeText(e);
    }

  return (
    <div className="div-model" style={{display:params.modelOn==true?'block':'none'}}>
    <div className='model-show' id="speaker-model">
        <h3 id="sp-name">{params.name}</h3><i className="fa-solid fa-xmark fa-lg cross" onClick={changeClass}></i>
        <div className="socialmedia">
            <a href={"https://www.facebook.com/user/"+params.name} className="socialicon"><i className="fa-brands fa-facebook fa-lg"></i></a>
            <a href={"https://www.linkedin.com/user/"+params.name} className="socialicon"><i className="fa-brands fa-linkedin fa-lg"></i></a>
            <a href={"https://www.pinterest.com/user/"+params.name} className="socialicon"><i className="fa-brands fa-pinterest fa-lg"></i></a>
            <a href={"https://www.tumblr.com/user/"+params.name} className="socialicon"><i className="fa-brands fa-square-tumblr fa-lg"></i></a>
        </div>
        <div className="copytext">
            <input id="text" type="text" value={"https://www.something.com/abc/"+params.name} readOnly/>
            <div className="spanblock"><i className="fa-solid fa-clone" onClick={(e)=>{copyText("https://www.something.com/abc/"+params.name)}}></i></div>
        </div>
    </div>
    </div>
  )
}

export default Model