import React from "react";

const OperatorButton = (props) => {
  return (
    <button style={oButtonStyles} className="operatorButton button">
      {props.operator}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

const oButtonStyles = {
  boxSizing: 'border-box',
  borderRadius: '50px',
  backgroundColor: 'dodgerblue',
  width: '90px',
  height: '90px',
  color: 'white',
  margin: '10px',
  marginTop: '8px',
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Arial',
  fontSize: '2.5rem',
}

export default OperatorButton;