import React from "react";

const SpecialButton = (props) => {
  return (
    <button style={sButtonStyles} className="numberButton button">
      {props.special}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

const sButtonStyles = {
  boxSizing: 'border-box',
  borderRadius: '50px',
  backgroundColor: 'blue',
  width: '90px',
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

export default SpecialButton;