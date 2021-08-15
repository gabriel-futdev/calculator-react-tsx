export interface ICalculatorInput {
  expression: string;
  displayExpression: string;
  /***
   * 1 = + (add)
   * 2 = + (substract)
   * 3 = + (multiply)
   * 4 = + (divide)
   * 5 = + (equal)
   * 6 = + (percentage)
   * 7 = + (delete)
   * 8 = + (clearAll)
   */
  operationId?: number;

}