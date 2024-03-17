import React from 'react'
import { Link } from 'react-router-dom'

function Info() {
  return (
    <div className='info' id='info'>
            <div>
                <h3>THE INSPIRE SUMMIT</h3>
            </div>
            <div className="info-location-place">
                    <div className='info-location-place-time'>
                        <div>Apr 18, 2035 8:30 AM</div>
                    </div>
                    <div className='info-location-place-address'>
                        <div>San Fransisco</div>
                    </div>
                </div>
            <div>
                <button className="home-main-get-tickets-btn"><Link to='/ticketbooking'>Get Tickets</Link></button>
            </div>
    </div>
  )
}

export default Info