
import './calculate.scss';
import { ICalculatorInput } from '../calculator-inputs/calculator-input.interface';

const Calculate = ({ expression, operationId, displayExpression }: ICalculatorInput) => {
  let history: string = '';
  let evaluated: string = '';
  switch (operationId) {
    case 5:
      try {
        evaluated = eval(expression);
        history += displayExpression;
      } catch {
        evaluated = 'Cannot evaluate';
      }


      break;
    case 8:
      history = '';
      evaluated = '0';
      break;
    default:
      evaluated = displayExpression
      break;
  }

  return (
    <div className="input">
      <div className="history">
        {history}
      </div>
      <div className="to-calculate">
        {evaluated}
      </div>
    </div>
  )
}

export default Calculate;