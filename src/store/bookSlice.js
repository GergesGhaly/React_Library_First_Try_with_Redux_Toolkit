import { createSlice } from '@reduxjs/toolkit'


export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState:[],
  reducers: {
    addItem: (state,action) => {
     const alreadyExist = state.find((value) => value.id === action.payload.id)
     if(alreadyExist){
      alreadyExist.quant +=1
     }else{
       
       state.push({...action.payload,'quant':1}) 
     }
    },
    removeItem:(state,action)=>{
      return state.filter((item ) => item.id !== action.payload.id)
    },
    clearCart: (state,action) => {
        return []
      }
  
  },
})

// Action creators are generated for each case reducer function
export const { addItem , removeItem ,clearCart} = bookSlice.actions;

export default bookSlice.reducer;

