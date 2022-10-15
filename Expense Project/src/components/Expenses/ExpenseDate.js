import React from 'react'
import './ExpenseDate.css';


function ExpenseDate(props) { //date props is coming from app file
const month = props.date.toLocaleString('en-US', {month:'long'}); //only getting the month from the attribute/props 
const day = props.date.toLocaleString('en-US', {day:'2-digit'}); //only getting 2 digit date from the props/attribute
const year = props.date.getFullYear(); //only getting 4 digits of the year as 2021 from the date props/attribute
   
    return (
    <div className="expense-date"> {/* these brackets are used because the data in them are directing to variable set at the top */}
      <div className="expense-date__month">{day}</div> 
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  )
}

export default ExpenseDate
