export interface ICalculatorDisplay {
  currentInput: string;
  previousInput: string;
}

export interface ICalculatorHistory {
  expression: string;
  result: string;
}

export interface IEnableHistory {
  enableHistory: boolean;
}