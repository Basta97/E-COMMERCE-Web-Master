import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState{
    AccessToken:string,
    userId:string,
}
const initialState:AuthState = {
    AccessToken :'',
    userId:''
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuth:(state,action :PayloadAction<AuthState>)=>{
            state.AccessToken = action.payload.AccessToken
            state.userId = action.payload.userId
        },
        logout: (state) => {
            state.AccessToken = ''
            state.userId = ''
            localStorage.removeItem('AccessToken')
            localStorage.removeItem('userId')
}},
})
export const {setAuth,logout} = authSlice.actions 
export default authSlice.reducer