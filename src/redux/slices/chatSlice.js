import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPeopleIndex: false,
  messages:{}
};

const chatSlice = createSlice({
  name:'chat',
  initialState:initialState,
  reducers:{
    selected: (state,action) => {
      console.log('das ist dispatch')
      state.selectedPeopleIndex = action.payload
    }
  }
})

export const actions = chatSlice.actions;
export default chatSlice.reducer;