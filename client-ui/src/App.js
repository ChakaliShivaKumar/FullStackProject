import './App.css';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import TicketBooking from './components/TicketBooking';
import Page from './components/Page';
import { useEffect, useState } from 'react';
import TicketCheckout from './components/TicketCheckout';
import Confirmation from './components/Confirmation';
import Events from './components/Events';

function App() {
  const [products, changeProducts] = useState([])
  const [tickets, changeTickets] = useState([])

  useEffect(()=>{
      const getData = async()=>{
          const response = await fetch('https://655c32f6ab37729791aa0bd5.mockapi.io/events?name=the%20inspire%20summit');
          const jsonData = await response.json();
          changeProducts(jsonData[0]['speakers']);
          changeTickets(jsonData[0]['tickets']);
      }
      getData();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page/>}>
              <Route index element = {<Home products={products}/>}/>
              <Route path='/ticketbooking' element={<TicketBooking tickets={tickets}/>}/>
              <Route path='/checkout' element={<TicketCheckout/>}/>
              <Route path='/confirmation' element={<Confirmation/>}/>
              <Route path='/events' element={<Events/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
