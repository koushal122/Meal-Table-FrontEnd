import React from 'react'
import './index.scss'
import { Logout } from '../../Util/Authentication';
import useAuth from '../../customHooks/useAuth';
import { useSelector } from 'react-redux';

const Profile = () => {
  const {logout} = useAuth();
  const userName = useSelector((store) => store.authentication.userName)

  const logoutUser = () =>{
    logout();
  }

  return (
    <div className='profile'>
        <i class="fa-regular fa-circle-user fa-2xl profile-icon"></i>
        <p onClick={()=>{logoutUser()}}>Hi {userName}</p>
    </div>
  )
}

export default Profile