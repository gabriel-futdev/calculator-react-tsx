import './calculator-inputs.scss'
import { useState, useEffect } from 'react';
import { ICalculatorInput } from './calculator-input.interface';


const CalculatorInputs = () => {
  const [input, setInput] = useState<ICalculatorInput>({ expression: '0', operationId: 1, displayExpression: '0' });

  const calculateExpression = (value: string, operationId?: number): void => {
    let exp: ICalculatorInput = {
      expression: input.expression,
      displayExpression: input.displayExpression,
      operationId: operationId
    };

    if (!operationId) {
      if (exp.displayExpression.length > 0 && exp.displayExpression.startsWith('0')) {
        exp.displayExpression = exp.displayExpression.slice(1, exp.displayExpression.length);
        exp.expression = exp.expression.slice(1, exp.expression.length);
      }

      exp.displayExpression += value;
      exp.expression += (Number.parseFloat(value)).toString();
      console.log(exp.expression);
    }
    if (operationId) {
      switch (operationId) {
        case 1:
          exp.displayExpression += ' + ';
          exp.expression += '+';
          break;
        case 2:
          exp.displayExpression += ' − ';
          exp.expression += '-';
          break;
        case 3:
          exp.displayExpression += ' × ';
          exp.expression += '*';
          break;
        case 4:
          exp.displayExpression += ' ÷ ';
          exp.expression += '/';
          break;
        case 7:
          exp.displayExpression = exp.displayExpression.trim().slice(0, exp.displayExpression.length - 1);
          exp.displayExpression = exp.displayExpression.trim();
          exp.expression = exp.expression.trim().slice(0, exp.expression.length - 1);
          break;
        default:
          break;
      }
    }
    setInput(exp);

  }

  return {
    input,
    calculatorInputs: (
      <div className="calculator-grid">
        <button onClick={() => calculateExpression('', 8)} className="btn-special">
          ac
        </button>
        <button onClick={() => calculateExpression('', 7)} className="btn-special">
          &#9003;
        </button>
        <button className="btn-circled-white">
          &#37;
        </button>
        <button onClick={() => calculateExpression('', 4)} className="btn-circled-white">
          &divide;
        </button>

        <button onClick={() => calculateExpression('7')} >7</button>
        <button onClick={() => calculateExpression('8')}>8</button>
        <button onClick={() => calculateExpression('9')} >9</button>
        <button onClick={() => calculateExpression('', 3)} className="btn-circled-white">&#215;</button>
        <button onClick={() => calculateExpression('4')} >4</button>
        <button onClick={() => calculateExpression('5')}  >5</button>
        <button onClick={() => calculateExpression('6')} >6</button>
        <button onClick={() => calculateExpression('', 2)} className="btn-circled-white">&#8722;</button>
        <button onClick={() => calculateExpression('1')} >1</button>
        <button onClick={() => calculateExpression('2')} >2</button>
        <button onClick={() => calculateExpression('3')} >3</button>
        <button onClick={() => calculateExpression('', 1)} className="btn-circled-white">&#43;</button>
        <button  >&plusmn;</button>
        <button onClick={() => calculateExpression('0')} >0</button>
        <button  >&#8901;</button>
        <button onClick={() => calculateExpression('', 5)} className="btn-circled-white">
          &#61;
        </button>
      </div>)
  }
}

export default CalculatorInputs;