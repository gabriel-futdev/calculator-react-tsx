import React, { ChangeEvent, FC, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Switchers from './components/switchers/switchers';
import Calculate from './components/calculate/calculate';
import CalculatorInputs from './components/calculator-inputs/calculator-inputs';



// https://dribbble.com/shots/5021040-Daily-UI-004-Calculator

const App: FC = () => {

  const { calculatorInputs, input } = CalculatorInputs();

  return (

    <div className="App">
      <Switchers />
      <Calculate expression={input.expression} operationId={input.operationId} displayExpression={input.displayExpression} />
      {calculatorInputs}
    </div>


  );
}

export default App;
