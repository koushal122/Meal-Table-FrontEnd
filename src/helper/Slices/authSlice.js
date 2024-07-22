import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice(
    {
        name : 'authentication',
        initialState :{
            isUserAuthenticated : false,
            userEmail : '',
            userName : ''
        },
        reducers : {
            login :(state,action) =>{
                localStorage.setItem('jwt_token', action.payload.token);
                localStorage.setItem('userEmail',action.payload.userEmail);
                localStorage.setItem('userName',action.payload.userName);
                state.isUserAuthenticated=true;
                state.userEmail=action.payload.userEmail;
                state.userName=action.payload.userName;
            },
            logout : (state) => {
                localStorage.removeItem('jwt_token');
                localStorage.removeItem('userEmail');
                state.isUserAuthenticated=false;
                state.userEmail='';
                state.userName='';
            }
        }
    }
)

export const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;