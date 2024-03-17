import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
    name: 'bookedTicket',
    initialState: {
      value: {name:'Early Bird Ticket',price:0,qty:0,total:0},
    },
    reducers: {
      addDetails: (state,action) => {
        state.value = action.payload
      },
    },
  })
  export const { addDetails } = ticketSlice.actions
  
  export default ticketSlice.reducer