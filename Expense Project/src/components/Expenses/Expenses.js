import React, {useState}  from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const[filterYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = (selectedYear)=>{ //in this line expected selectedYear is an attribute.
    setFilteredYear(selectedYear);
    // console.log('Expenses.js');
    // console.log(selectedYear); //printing the attribute selectedYear
  }

  return (
  
    <Card className="expenses">
      <ExpenseFilter onChangeFilter ={filterChangeHandler} selected={filterYear} /> 
      {/* //onChangeFilter is props, later being used in the ExpenseFilter.js file */}
      <ExpenseItem 
        title={props.items[0].title}  //Being assigned as props(attributes) = {arrayname[#].ob  jectname}
        amount={props.items[0].amount}
        date={props.items[0].date} />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date} />

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date} />

      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date} />
    </Card>
  )
}

export default Expenses;
