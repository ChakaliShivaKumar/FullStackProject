import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {},
  },
  reducers: {
    addDetails: (state,action) => {
      state.value = action.payload

    },
  },
})
export const { addDetails } = userSlice.actions

export default userSlice.reducer