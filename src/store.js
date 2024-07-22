import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './helper/Slices/authSlice'

const Store = configureStore(
    {
        reducer : {
            authentication : AuthReducer
        }
    }
)

export default Store;