// create class
class Calculator {
    // init proses
    constructor() {
      this.screenValue = '';
      this.firstOperand = null;
      this.secondOperand = null;
      this.operator = null;
    }
  
    appendNumber = (number) => {
      this.screenValue += number;
      this.updateScreen();
    };
  
    chooseOperator = (operator) => {
      if (this.screenValue === '') return;
      this.firstOperand = parseFloat(this.screenValue);
      this.operator = operator;
      this.screenValue = '';
    };
  
    calculate = () => {
      if (this.operator === null || this.screenValue === '') return;
      this.secondOperand = parseFloat(this.screenValue);
      const result = this.operate();
      this.screenValue = result;
      this.updateScreen();
      this.firstOperand = null;
      this.secondOperand = null;
      this.operator = null;
    };
    operate() {
        switch (this.operator) {
          case '+':
            return this.firstOperand + this.secondOperand;
          case '-':
            return this.firstOperand - this.secondOperand;
          case '*':
            return this.firstOperand * this.secondOperand;
          case '/':
            return this.firstOperand / this.secondOperand;
          default:
            return;
        }
    };

    clear() {
        this.screenValue = '';
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.updateScreen();
      };
      
    updateScreen() {
        const screen = document.querySelector('.calculator-screen');
        screen.value = this.screenValue;
      };

}

const calculator = new Calculator();
      
document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
          const value = button.value;
          if (!isNaN(value) || value === '') {
            calculator.appendNumber(value);
          } else if (value === 'all-clear') {
            calculator.clear();
          } else if (value === '=') {
            calculator.calculate();
          } else {
            calculator.chooseOperator(value);
          }
     });
});