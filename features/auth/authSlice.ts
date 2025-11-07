import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState{
    AccessToken:string,
    refreshToken:string
    userId:string,
}
const initialState:AuthState = {
    AccessToken :'',
    refreshToken:'',
    userId:''
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth:(state,action :PayloadAction<AuthState>)=>{
            state.AccessToken = action.payload.AccessToken
            state.refreshToken = action.payload.refreshToken
            state.userId = action.payload.userId
        }
    },
})
export const {setAuth} = authSlice.actions 
export default authSlice.reducer