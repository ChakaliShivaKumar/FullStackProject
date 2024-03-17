import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TicketCheckout from './components/TicketCheckout';
import TicketBooking from './components/TicketBooking';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

var tickets = [
    {
        "ticket-title" : "PHASE 1-SILVER",
        "ticket-title-description" : "This ticket grants entry to one person into the Silver section(Standing only)",
        "ticket-price" : 999,
        "max" : 8,
        "available" : 15,
        "total" : 50
    },
    {
        "ticket-title" : "PHASE 1-GOLD",
        "ticket-title-description" : "This ticket grants entry to one person into the Gold section(Standing only)",
        "ticket-price" : 1499,
        "max" : 8,
        "available" : 15,
        "total" : 50
    },
    {
        "ticket-title" : "PHASE 1-FANPIT",
        "ticket-title-description" : "This ticket grants entry to one person into the Fanpit section(Standing only)",
        "ticket-price" : 2499,
        "max" : 8,
        "available" : 15,
        "total" : 50
    },
    {
        "ticket-title" : "GOLD TABLE (4-6PAX) | STANDING COCKTAIL TABLE",
        "ticket-title-description" : "2 BOTTLES OF PREMIUM LIQUOR (WHISKY/VODKA)12 BEERS, UNLIMITED CHASERS.2 VEG/ 2 NON VEG STARTERS, ELEVATED STAGEHASSLE FREE ENTRY. 2 SPECIAL CAR PARKING PASSES,DEDICATED RESTROOMS. SECURITY AND SERVICE.",
        "ticket-price" : 50000,
        "max" : 5,
        "available" : 4,
        "total" : 10
    },
    {
        "ticket-title" : "DIAMOND TABLE (6-8 PAX) | SEATING SOFA",
        "ticket-title-description" : "3 BOTTLES OF PREMIUM LIQUOR (WHISKY/VODKA)18 BEERS, UNLIMITED CHASERS,2 VEG/2 NON VEG STARTERS, ELEVATED STAGEHASSLE FREE ENTRY, 3 SPECIAL CAR PARKING PASSES,DEDICATED RESTROOMS, SECURITY AND SERVICE",
        "ticket-price" : 85000,
        "max" : 5,
        "available" : 2,
        "total" : 15
    }
]

var bookedTickets = {
    "PHASE 1-SILVER" : {
        "price" : 999,
        "noOfTickets": 0,
        "total": 0
    },
    "PHASE 1-GOLD" : {
        "price" : 1499,
        "noOfTickets": 0,
        "total": 0
    },
    "PHASE 1-FANPIT" : {
        "price" : 2499,
        "noOfTickets": 0,
        "total": 0
    },
    "GOLD TABLE (4-6PAX) | STANDING COCKTAIL TABLE" : {
        "price" : 50000,
        "noOfTickets": 0,
        "total": 0
    },
    "DIAMOND TABLE (6-8 PAX) | SEATING SOFA" : {
        "price" : 85000,
        "noOfTickets": 0,
        "total": 0
    }
}
var bookedTicket = {name:'Early Bird Ticket',price:0,qty:0,total:0}
function chgBookedTicket(bt){
  bookedTicket=bt;
}

const Mocktest =()=>{
  return(
    <BrowserRouter>
      <TicketCheckout ticket={bookedTicket} chgUser={null}/>
    </BrowserRouter>
  )
}


const Mocktest2 =()=>{
  return(
    <BrowserRouter>
      <TicketBooking tickets={tickets} chgBookedTicket={chgBookedTicket}/>
    </BrowserRouter>
  )
}

test('renders women text', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/women/i);
  expect(linkElement.length).toBe(3);
});

//Testing TicketBooking component
test('Button should be disabled initially',()=>{
  render(<Mocktest2/>)
  const checkoutBtn = screen.getByTitle('checkout-btn');
  expect(checkoutBtn).toBeDisabled();
})

test('total value changes on input increment',()=>{
  render(<Mocktest2/>)
  const input = screen.getAllByPlaceholderText("0")[0]
  fireEvent.change(input,{target:{value:2}})
  const total = screen.getByTitle('total-value').textContent;
  const checkoutBtn = screen.getByTitle('checkout-btn');
  expect(total).toEqual("1998");
  expect(checkoutBtn).not.toBeDisabled();
})

test('renders ticket checkout page', () => {
  render(<Mocktest/>);
  const linkElement = screen.getAllByText('Address');
  expect(linkElement.length).toBe(1);
});