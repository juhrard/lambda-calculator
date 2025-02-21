import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div style={oDivStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/}
      {operatorState.map((operator, index) => (
        <OperatorButton key={index} operator={operator.char}/>
      ))}
    </div>
  );
};

const oDivStyle = {
  display: 'flex',
  flexFlow: 'column',
}

export default Operators;
