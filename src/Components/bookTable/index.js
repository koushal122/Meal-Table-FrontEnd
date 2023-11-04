import React from 'react'
import './index.scss';
const BookTable = ({className}) => {
  return (
    <div className={`book-table ${className}`}>
        <h3>BOOK A TABLE</h3>
        <form>
            <div className="book-name">
                <input placeholder='First Name'></input>
                <input placeholder='Last Name'></input>
            </div>
            <div className="book-date-time">
                <input placeholder='Date' type='date'></input>
                <input placeholder='Time' type='time'></input>
                <input placeholder='Phone' type='tel'></input>
            </div>
            <div className="book-msg-appoint">
                <textarea placeholder="Message"></textarea>
                <button>Appointment</button>
            </div>
        </form>
    </div>
  )
}

export default BookTable