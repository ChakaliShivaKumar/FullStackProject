import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { addDetails } from '../redux/UserSlice'
import { useDispatch, useSelector } from 'react-redux';

function TicketCheckout() {
  const [time,chgTime] = useState('05:00');
  var [active,chgActive] = useState(true)
  var [nameFields, chgNameFields] = useState({fName:'default',lName:'default',email:'default'})
  var [addressFields, chgAddressFields] = useState({hNo:'default',area:'default',city:'default',state:'default',country:'default',pincode:'default'})
  var [validEmail, chgValidEmail] = useState(true)
  var [validNameFields, chgValidNameFields] = useState(false)
  const navigate = useNavigate()
  const userr = useSelector((state)=>(state.user.value))
  const bkTicket = useSelector((state)=>(state.bookedTicket.value))
  const dispatch = useDispatch()

  function validateInputFields(){
    var pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(ifValid(nameFields.fName) && ifValid(nameFields.lName) && pattern.test(nameFields.email)){
        chgValidNameFields(true)
    }else{
        chgValidNameFields(false)
    }
  }
  function validateAddressFields(){
    console.log(userr)
    if(ifValid(addressFields.hNo) && ifValid(addressFields.area) && ifValid(addressFields.city) && ifValid(addressFields.state) && ifValid(addressFields.country) && ifValid(addressFields.pincode)){
        dispatch(addDetails({"nameFields" : nameFields,"addressFields": addressFields}))
        navigate('/confirmation')
    }
  }

  function ifValid(inp){
    if(inp!=''){
        return true;
    }else{
        return false;
    }
  }

  function onEmailChange(e){
    chgNameFields({...nameFields,email:e.target.value});
    var pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!pattern.test(nameFields.email)){
        chgValidEmail(false)
    }else{
        chgValidEmail(true)
    }
  }

  useEffect(()=>{
    var fiveMin = 60 * 5;
    var seconds=1
    var counter = setInterval(function(){
        var timeleft = fiveMin - seconds;
        if(timeleft==0){
            chgTime('00:00')
            chgActive(false)
        }else{
            var result = String(parseInt(timeleft / 60) + ':' + timeleft % 60); //formart seconds back into mm:ss 
            chgTime(result)
            seconds++
        }
    },1000);
  },[])
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
        <main className='checkout'>
          <div className="forms">
              <h2 className="form-title">Add Your Details</h2>
              <section className="accordion">
                  <div className="tab">
                      <input type="radio" name="accordion-group" id="rd1" className="accordion-input"/>
                      <label htmlFor="rd1" id="label1" className="accordion-label tab-label">User info<i className="fa-solid fa-angle-down"></i></label>
                      <article className="fields">
                          <div className="name-fields">
                              <div>
                                  <label htmlFor="fName" className="labels">*First Name</label>
                                  <div><input type="text" className="input-field" name="fName" onChange={e=>chgNameFields({...nameFields,fName:e.target.value})}/></div>
                                  <div className="error-field" style={{display:ifValid(nameFields.fName)?'none':'block'}}>This field is imp</div>
                              </div>
                              <div>
                                  <label htmlFor="lName" className="labels">*Last Name</label>
                                  <div><input type="text" className="input-field" name="lName" onChange={e=>chgNameFields({...nameFields,lName:e.target.value})}/></div>
                                  <div className="error-field" style={{display:ifValid(nameFields.lName)?'none':'block'}}>This field is imp</div>
                              </div>
                          </div>
                          <div className="name-fields">
                              <label htmlFor="email" className="labels">*Email</label>
                              <div><input type="email" className="input-field" name="email" onChange={e=>onEmailChange(e)}/></div>
                              <div className="error-field" style={{display:ifValid(nameFields.email)&&validEmail?'none':'block'}}>This field is imp</div>
                          </div>
                      </article>
                  </div>
                  <div className="tab">
                      <input type="radio" name="accordion-group" id="rd2" className="accordion-input" disabled={!validNameFields}/>
                      <label htmlFor="rd2" className="accordion-label" id="abc" onClick={validateInputFields}>Address<i className="fa-solid fa-angle-down"></i></label>
                      <article className="fields">
                          <div className="address-fields">
                              <div className="add-fields">
                                  <div>
                                      <div className="label-inputs">
                                          <label htmlFor="hnumber" className="labels">*H.No</label>
                                          <input type="text" className="input-field2" name="hnumber" onChange={e=>chgAddressFields({...addressFields,hNo:e.target.value})}/>
                                      </div>
                                      <div className="error-field" style={{display:ifValid(addressFields.hNo)?'none':'block'}}>This field is imp</div>
                                  </div>
                                  <div>
                                      <div className="label-inputs">
                                          <label htmlFor="area" className="labels">*Area</label>
                                          <input type="text" className="input-field2" name="area" onChange={e=>chgAddressFields({...addressFields,area:e.target.value})}/>
                                      </div>
                                      <div className="error-field" style={{display:ifValid(addressFields.area)?'none':'block'}}>This field is imp</div>
                                  </div>
                              </div>
                              <div className="add-fields">
                                  <div>
                                      <div className="label-inputs">
                                          <label htmlFor="city" className="labels">*City</label>
                                          <input type="text" className="input-field2" name="city" onChange={e=>chgAddressFields({...addressFields,city:e.target.value})}/>
                                      </div>
                                      <div className="error-field" style={{display:ifValid(addressFields.city)?'none':'block'}}>This field is imp</div>
                                  </div>
                                  <div>
                                      <div className="label-inputs">
                                          <label htmlFor="state" className="labels">*State</label>
                                          <input type="text" className="input-field2" name="state" onChange={e=>chgAddressFields({...addressFields,state:e.target.value})}/>
                                      </div>
                                      <div className="error-field" style={{display:ifValid(addressFields.state)?'none':'block'}}>This field is imp</div>
                                  </div>
                              </div>
                              <div className="add-fields">
                                  <div>
                                      <div className="label-inputs">
                                          <label htmlFor="country" className="labels">*Country</label>
                                          <input type="text" className="input-field2" name="country" onChange={e=>chgAddressFields({...addressFields,country:e.target.value})}/>
                                      </div>
                                      <div className="error-field" style={{display:ifValid(addressFields.country)?'none':'block'}}>This field is imp</div>
                                  </div>
                                  <div>
                                      <div className="label-inputs"><label htmlFor="pincode" className="labels">*Pincode</label><input type="number" className="input-field2" name="pincode" onChange={e=>chgAddressFields({...addressFields,pincode:e.target.value})}/></div>
                                      <div className="error-field" style={{display:ifValid(addressFields.pincode)?'none':'block'}}>This field is imp</div>
                                  </div>
                              </div>
                          </div>
                      </article>
                  </div>
              </section>
              <div>
                  <button className="continue-btn" disabled={!active} on onClick={validateAddressFields}>Continue</button>
              </div>
          </div>
          <div className="division2">
              <section className="timer">
                  Time left&nbsp;<div id="test">{time}</div>
              </section>
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
                  <h3 className="total-title">Total</h3>
                  <h3 className="total-title">Rs. <span className="overall-total">{10+Number(bkTicket.total)}</span></h3>
              </div>
          </div>
          </div>
        </main>
    </div>
  )
}

export default TicketCheckout