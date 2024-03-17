import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import ticketReducer from './TicketSlice'

export default configureStore({
  reducer: {
    user : userReducer,
    bookedTicket : ticketReducer
  },
})