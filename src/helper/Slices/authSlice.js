import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice(
    {
        name : 'authentication',
        initialState :{
            isUserAuthenticated : false,
            userEmail : '',
            userName : '',
            isAdmin:false
        },
        reducers : {
            login :(state,action) =>{
                localStorage.setItem('jwt_token', action.payload.token);
                localStorage.setItem('userEmail',action.payload.userEmail);
                localStorage.setItem('userName',action.payload.userName);
                localStorage.setItem('isAdmin',action.payload.isAdmin);
                state.isUserAuthenticated=true;
                state.userEmail=action.payload.userEmail;
                state.userName=action.payload.userName;
                state.isAdmin=action.payload.isAdmin;
            },
            logout : (state) => {
                localStorage.removeItem('jwt_token');
                localStorage.removeItem('userEmail');
                localStorage.removeItem('isAdmin');
                localStorage.removeItem('userName');
                state.isAdmin=false;
                state.isUserAuthenticated=false;
                state.userEmail='';
                state.userName='';
            }
        }
    }
)

export const {login,logout} = AuthSlice.actions;
export default AuthSlice.reducer;