import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import { addDetails } from '../redux/TicketSlice'
import { useDispatch } from 'react-redux';

function TicketBooking(params) {

    const [total, chgTotal] = useState(0);
    const [active, chgActive] = useState([false,false,false,false,false]);
    const dispatch = useDispatch()

    function change(e,x,i){
        if(e.target.value!=0){
            let abc = [true,true,true,true,true]
            abc[i]=false;
            chgActive(abc);
            chgTotal(Number(x["ticket-price"])*Number(e.target.value));
            var ticketBooked = {name:x["ticket-title"],price:x["ticket-price"],qty:Number(e.target.value),total:(Number(x["ticket-price"])*Number(e.target.value))}
            dispatch(addDetails(ticketBooked))
        }else{
            let abc = [false,false,false,false,false]
            chgActive(abc);
            chgTotal(0);
        }
    }

  return (
    <div className='container'>
        <header className="ticket-home">
            <input type="checkbox" id="home-menu-bar" className='home-menu-bar'/>
            <a href="#"><img src={require('../images/Link.png')} alt="Logo"/></a>
            <a className="home-icon">
                <label htmlFor="home-menu-bar"><i className="fa-solid fa-bars fa-2xl"></i></label>
            </a>
            <div className='ticket-nav'>
                <NavBar/>
            </div>
        </header>
        <div className='ticket-main-location'>
                <div className='ticket-main-location-name'>
                    <h3>THE INSPIRE SUMMIT</h3>
                </div>
                <div className="ticket-main-location-place">
                    <div className='ticket-main-location-place-time'>
                        <div>Apr 18, 2035 8:30 AM</div>
                    </div>
                    <div className='ticket-main-location-place-address'>
                        <div>San Fransisco</div>
                    </div>
                </div>
        </div>
        <section className='ticket-main'>
            {
                params.tickets.map((x,i)=>
                    <div className="ticket">
                        <div className="ticket-description">
                            <div className="title-description">
                                <h3 className="ticket-title">{x["ticket-title"]}<span className='imp' style={{display:x.available<x.max?'inline':'none'}}>Few Tickets Left</span></h3>
                                <p className="ticket-title-description">{x["ticket-title-description"]}</p>
                            </div>
                            <div>
                                <div className="ticket-price">
                                    Rs.<span className="ticket-price-value">{x["ticket-price"]}</span> x <input type="number" className="ticket-input-value" min="0" max={Math.min(x.available,x.max)} placeholder='0' onChange={e=>{change(e,x,i)}} disabled={active[i]?true:false}/>
                                    <br/>
                                    <br/>
                                    <div>Remaining: <span className="tickets-remaining">{x["available"]}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </section>
        <div className="subtotal">
            <div>
                <div><h3>Total</h3></div>
            </div>
            <div>
                <div><h3>Rs.<span className="total-value" title='total-value'>{total}</span></h3></div>
                <div><button className="checkout-btn" title='checkout-btn' disabled={total!=0?false:true}><Link to='/checkout' style={total==0 ? {pointerEvents: "none"} : null}>Checkout</Link></button></div>
            </div>
        </div>
        <footer>
            <div className="footicons">
                <div><img src={require('../images/facebook.png')} alt="facebook"/></div>
                <div><img src={require('../images/twitter.png')} alt="twitter"/></div>
            </div>
            <div>
                2023 by Women of Tech. Powered
            </div>
        </footer>
    </div>
  )
}

export default TicketBooking