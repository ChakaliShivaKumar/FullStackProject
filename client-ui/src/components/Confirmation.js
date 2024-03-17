import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Confirmation() {
  var [submit, chgSubmit] = useState(false)
  var [bookingId, chgBookingId] = useState()
  const userr = useSelector((state)=>(state.user.value))
  const bkTicket = useSelector((state)=>(state.bookedTicket.value))

  var user = JSON.stringify(userr)
  var bookingid = () => {
    let s = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return 'ID: '+s()+ '-' + s() + '-' + s() + s() + s();
  }

  useEffect(()=>{
    chgBookingId(bookingid())
  },[])

  return (
    <div className="container">
        <div className="thankyou-note no-print">
            <div className="tick-mark"><i className="fa-regular fa-circle-check fa-2xl" style={{color: '#43b01c'}}></i></div>
            <div className="note">
                <h3>Thank you for your purchase!</h3>
                <div>We will send you an e-mail/SMS/WhatsApp confirmation within 15 minutes. You can also access yourbooking via Profile. Please check confirmation mail for COVID entry protocols.</div>
            </div>
        </div>
        <div id="printsection">
        <section className="ticket-final-details">
            <div className="division1">
                <div id="qrcode">
                <QRCode
                  style={{ height: "auto", maxWidth: "192", width: "192" }}
                  value={user===undefined?'Error':user}
                  />
                </div>
                <b><div className="booking-id">{bookingId}</div></b>
                <div><button className="print-ticket" onClick={e=>window.print()}>Print Ticket</button></div>
            </div>
            <div className="division2">
                <div className="ticket-details">
                    <div>
                        <h3 className="ticket-details-title">The Inspire Summit</h3>
                    </div>
                    <div className="ticket-details-description">
                            <div>Apr 18, 2035 <span className="ticket-details-description-time">12:00</span></div>
                            <div>San Fransisco</div>
                    </div>
                    <div className="ticket-details-description">
                        <div className="ticket-details-description-ticket-type">{bkTicket.name}</div>
                        <br/>
                        <div>price: <span className="ticket-details-description-ticket-price">{bkTicket.price}</span></div>
                        <div className="ticket-total">
                            <div>Qty: <span className="ticket-details-description-ticket-quantity">{bkTicket.qty}</span></div>
                            <div>Rs. <span className="ticket-details-description-ticket-total">{bkTicket.total}</span></div>
                        </div>
                    </div>
                    <div className="ticket-details-description">
                        <div className="ticket-total">
                            <div>Subtotal:</div>
                            <div>Rs. <span className="sub-total-value">{bkTicket.total}</span></div>
                        </div>
                        <div className="ticket-total">
                            <div>Service Charge:</div>
                            <div>Rs. <span className="service-charge-value">10</span></div>
                        </div>
                    </div>
                    <div className="ticket-total">
                        <h3 className="total-title">Total Amount Paid</h3>
                        <h3 className="total-title">Rs. <span className="overall-total">{10+Number(bkTicket.total)}</span></h3>
                    </div>
                </div>
            </div>
        </section>
        </div>
        <section className="feedback no-print">
            <input type="text" placeholder="Your feedback..."/>
            <div>
                <button className="feedback-btn" onClick={e=>chgSubmit(true)}>Submit</button><i className="fa-solid fa-check check-mark" style={{display:submit?'inline':'none'}}></i>
            </div>
        </section>
        <section className="instructions no-print">
            <h3>Important Instructions</h3>
            <ul>
                <li><p>This ticket can be cancelled up to 60 min(s) before the event as per cancellation policy.</p></li>
                <li><p>This ticket is not transforable.</p></li>
                <li><p>Reservation will be cancelled if you do not check-in within 60 mins after event starts.</p></li>
            </ul>
        </section>
        <div className="continue-link no-print">
            <Link to="/">continue browsing</Link>
        </div>
    </div>
  )
}

export default Confirmation