import './calculator-inputs.scss';

import { useState } from 'react';

import { OPERAND } from './operand.enum';


const CalculatorInputs = () => {
  let [currentInput, setCurrentInput] = useState<string>('0');
  let [previousInput, setPreviousInput] = useState<string>('');
  let [_currentInput, _setCurrentInput] = useState<number>(0);
  let [_previousInput, _setPreviousInput] = useState<number>(0);
  const [currentOperation, setOperation] = useState<OPERAND>(OPERAND.undefined);

  const appendNumber = (value: string): void => {
    if (currentInput.includes('.') && value === '.') return;
    if (currentInput === '0' && value === '0') return;
    if (currentInput === '0' && +(value) > 0) {
      setCurrentInput(value);
      const number = parseFloat(value);
      _setCurrentInput(number);
      return;
    }
    const appended = currentInput += value;
    setCurrentInput(appended);
    const number = parseFloat(appended);
    _setCurrentInput(number);
  }

  const allClear = (): void => {
    setCurrentInput('0');
    setPreviousInput('');
    _setCurrentInput(0);
    _setPreviousInput(0);
  }

  const operation = (opr: OPERAND): void => {
    setOperation(opr);
    let inpt = currentInput;
    let inptNumber = parseFloat(currentInput);

    if ((previousInput.endsWith('+')
      || previousInput.endsWith('−')
      || previousInput.endsWith('×')
      || previousInput.endsWith('÷'))
      && _currentInput === 0) {

      inpt = previousInput.slice(0, -1);
      inptNumber = parseFloat(inpt);
    }

    switch (opr) {
      case OPERAND.ADD:
        inpt += '+'
        break;
      case OPERAND.SUBTRACT:
        inpt += '−'
        break;
      case OPERAND.MULTIPLY:
        inpt += '×'
        break;
      case OPERAND.DIVIDE:
        inpt += '÷'
        break;
      default:
        return;
    }
    setPreviousInput(inpt);
    setCurrentInput('');
    _setPreviousInput(inptNumber);
    _setCurrentInput(0);
  }

  const del = (): void => {
    const inpt = currentInput.slice(0, -1);
    setCurrentInput(inpt);
    const number = parseFloat(inpt);
    _setCurrentInput(number);
  }

  const equals = () => {
    switch (currentOperation) {
      case OPERAND.ADD:
        const sum = _previousInput + _currentInput;
        const sumRounded = round2deci(sum);
        setCurrentInput(sumRounded.toString());
        break;
      case OPERAND.SUBTRACT:
        const difference = _previousInput - _currentInput;
        const differenceRounded = round2deci(difference);
        setCurrentInput(differenceRounded.toString());
        break;
      case OPERAND.MULTIPLY:
        const product = _previousInput * _currentInput;
        const productRounded = round2deci(product);
        setCurrentInput(productRounded.toString());
        break;
      case OPERAND.DIVIDE:
        const qoutient = _previousInput / _currentInput;
        const qoutientRounded = round2deci(qoutient);
        setCurrentInput(qoutientRounded.toString());
        break;
      default:
        return;
    }
    setPreviousInput('');
    _setPreviousInput(0);
    setOperation(OPERAND.undefined);
  }

  const percent = () => {
    if (_currentInput === 0 || currentInput === '') return;
    const number = round2deci((parseFloat(currentInput) * 0.1));
    _setCurrentInput(number);
    setCurrentInput(number.toString());

  }

  const negate = () => {
    if (_currentInput === 0 || currentInput === '') return;
    const number = (parseFloat(currentInput) * -1);
    _setCurrentInput(number);
    setCurrentInput(number.toString());
  }

  const round2deci = ((number: number) => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  });

  return {
    currentInput,
    previousInput,
    currentOperation,
    calculatorInputs: (
      <div className="calculator-grid-parent">
        <div className="calculator-grid">
          <button // all clear
            onClick={() => allClear()} className="btn-special">
            ac
          </button>
          <button onClick={() => del()}
            className="btn-special small-text">
            &#9003;
          </button>
          <button onClick={() => percent()}
            className="btn-circled-white">
            &#37;
          </button>
          <button onClick={() => operation(OPERAND.DIVIDE)}
            className="btn-circled-white">
            &divide;
          </button>

          <button onClick={() => appendNumber('7')} >7</button>
          <button onClick={() => appendNumber('8')}>8</button>
          <button onClick={() => appendNumber('9')} >9</button>
          <button onClick={() => operation(OPERAND.MULTIPLY)}
            className="btn-circled-white">&#215;</button>
          <button onClick={() => appendNumber('4')} >4</button>
          <button onClick={() => appendNumber('5')}  >5</button>
          <button onClick={() => appendNumber('6')} >6</button>
          <button onClick={() => operation(OPERAND.SUBTRACT)}
            className="btn-circled-white">&#8722;</button>
          <button onClick={() => appendNumber('1')} >1</button>
          <button onClick={() => appendNumber('2')} >2</button>
          <button onClick={() => appendNumber('3')} >3</button>
          <button onClick={() => operation(OPERAND.ADD)} // add
            className="btn-circled-white">&#43;</button>
          <button onClick={() => negate()}
          >&plusmn;</button>
          <button onClick={() => appendNumber('0')} >0</button>
          <button onClick={() => appendNumber('.')}
          >&#8901;</button>
          <button onClick={() => equals()}
            className="btn-circled-white">
            &#61;
          </button>
        </div>
      </div>)
  }
}

export default CalculatorInputs;