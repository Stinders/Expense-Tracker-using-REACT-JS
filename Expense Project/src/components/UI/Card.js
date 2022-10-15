import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; //this constant variable has been defined so that we can use a card instead 
  //of div to reduce the duplicate css over and over again
  // this is called creating a custom component which will use classes for better styling.
  
  return <div className={classes}>{props.children}</div>; 
  //div className is pointing at the classes variable and then props.children is being render 

}

export default Card;