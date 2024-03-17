import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="footicons">
            <div><img src={require('../images/facebook.png')} alt="facebook"/></div>
            <div><img src={require('../images/twitter.png')} alt="twitter"/></div>
        </div>
        <div>
            2023 by Women of Tech. Powered
        </div>
    </footer>
  )
}

export default Footer