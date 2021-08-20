import './App.scss';

import React, { FC } from 'react';

import Calculate from './components/calculate-display/calculate-display';
import CalculatorInputs from './components/calculator-inputs/calculator-inputs';
import Switchers from './components/switchers/switchers';



// https://dribbble.com/shots/5021040-Daily-UI-004-Calculator

const App: FC = () => {

  const { calculatorInputs, currentInput, previousInput } = CalculatorInputs();
  const { theme, switchers } = Switchers();
  return (

    <div className={`App ${theme}`}>
      {switchers}
      <Calculate currentInput={currentInput} previousInput={previousInput} />
      {calculatorInputs}
    </div>


  );
}

export default App;
