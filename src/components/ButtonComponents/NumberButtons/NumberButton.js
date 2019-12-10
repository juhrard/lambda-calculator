import React from "react";

const NumberButton = (props) => {
  return ( 
    <button style={getNButtonStyles(props.number)} className="numberButton button">
      {props.number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

let getNButtonStyles = function(num) {
  return {
    boxSizing: 'border-box',
    borderRadius: '50px',
    backgroundColor: 'darkblue',
    width: num === '0' ? '200px' : '90px',
    height: '90px',
    color: 'white',
    margin: '10px',
    marginTop: '8px',
    marginBottom: '8px',
    display: 'flex',
    fontFamily: 'Arial',
    fontSize: '2.5rem',
    justifyContent: 'center',
  }
}



export default NumberButton;

