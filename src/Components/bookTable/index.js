import React, { useState } from 'react'
import './index.scss';
import * as constants from './constants.js'
import genericInterface from '../../Util/genericInterface';
import { emailValidator, phoneNumberValidator } from '../../helper/validations/validations.js';
import useAuth from '../../customHooks/useAuth.js';
import Loader from '../loader/index.js';
import Popup from '../popup/index.js';
import { useSelector } from 'react-redux';


const BookTable = ({className}) => {

//   const availableTableCheckApi = genericInterface(constants.CHECK_AVAILABLE_TABLE_ENDPOINT);
//   const [requiredSeat,setRequiredSeat] = useState(0);
  const availableTableCheckApi = genericInterface(constants.CHECK_AVAILABLE_TABLE_ENDPOINT);
  const bookTableApi = genericInterface(constants.BOOK_TABLE_ENDPOINT);
  const [requiredSeat, setRequiredSeat] = useState('');
  const [phone, setPhone] = useState('');
  const [availableSeats, setAvailableSeats] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { isAuthenticated } = useAuth();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const userEmail = useSelector((store)=>store.authentication.userEmail);

  const handleCheckingTable = async (event) =>{
    event.preventDefault();
    if (!requiredSeat) {
        alert('Please enter the number of seats.');
        return;
      }
      setLoading(true); // Show loader
      const response = await availableTableCheckApi.read();
      const tablesWithId = response.data;
      let totalSeats = 0;
      tablesWithId.forEach((value) => {
        totalSeats += value[1];
      });
      setLoading(false);
      if (requiredSeat > totalSeats) {
        alert(`Currently, the number of seats you entered is not available. Maximum available seats are ${totalSeats}.`);
        setIsAvailable(false);
      } else {
        setAvailableSeats(totalSeats);
        setIsAvailable(true);
      }
  }

  const handleBookingTable = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      setShowPopup(true);
      return;
    }
    if (!phone || !phoneNumberValidator(phone)) {
      alert('Please enter a valid 10 digit phone number.');
      return;
    }
    if(!isAvailable){
      alert('Please check seat availability before booking table');
      return;
    }

    const bookTablePayload = {
       email : userEmail,
       requiredSeats : requiredSeat,
       paymentAmount : 800,
       startTime : new Date(startTime).toISOString(),
       endTime : new Date(endTime).toISOString()
    }
    const response = await bookTableApi.create(bookTablePayload);
    console.log(response);
    alert('Table booked successfully!');
  };



  return (
    <div className={`book-table ${className}`}>
        <h3>BOOK A TABLE</h3>
        <form onSubmit={handleCheckingTable}>
            <div className="date-time-seat">
                <input required placeholder='Number of Seats' type='number' value={requiredSeat} onChange={(e)=> setRequiredSeat(e.target.value)}></input>
                <input placeholder='StartTime' type='datetime-local' value={startTime} required onChange={(e)=>setStartTime(e.target.value)}></input>
                <input placeholder='EndTime' type='datetime-local' value={endTime} required onChange={(e)=>setEndTime(e.target.value)} ></input>
            </div>
            <div className="check-table-container">
                <button type='submit' className="check-table" onClick={handleCheckingTable}>
                   {loading ? <Loader size='small' color='#000000' /> : 'Check Availability'}
                </button>
            </div>
        </form>
        <form onSubmit={handleBookingTable}>
            <div className="book-table-phone">
                <input placeholder='Phone' type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
                <button className='book-table-button'>Book Table</button>
            </div>
        </form>
        {showPopup && (
        <Popup
          message="You need to be logged in to book a table."
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}

export default BookTable