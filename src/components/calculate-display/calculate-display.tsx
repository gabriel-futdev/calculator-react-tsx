import './calculate-display.scss';

import { ICalculatorDisplay } from '../calculator-inputs/calculator-input.interface';


const Calculate = ({ currentInput, previousInput }: ICalculatorDisplay) => {

  return (
    <div className="output">
      <div className="previous-output">
        {previousInput}
      </div>
      <div className="current-output">
        {currentInput}
      </div>
    </div>
  )
}

export default Calculate;