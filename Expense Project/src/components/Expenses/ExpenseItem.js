import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



function ExpenseItem(props) {// instead of using props you can use any name
    // The data is coming from the app.js file from where we have set the attribute of the expense items 
    // const [title, setTitle] = useState(props.title); 
    //  console.log('this many are evaluated');//special variable and also useState will return something will return function
                                                         //Always call inside of react componenet functions not outside function not in nested functions

    // const clickHanlder = () => { //clickHanlder has been assigned below to onClick to show how a button would work.
    //     setTitle('updated with setTitle');
    //     console.log(title);
    // };

    return (

        <Card className="expense-item">
            <ExpenseDate date={props.date} /> {/* New attribute(date) is being assigned and is coming from the ExpenseDate file  */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>  {/* its displaying the title attribute or props that we assigned in app file */}
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHanlder}>Change Title</button>   ->onclick props even handlers needs a functions to do something */}
        </Card>
    )
}

export default ExpenseItem;
