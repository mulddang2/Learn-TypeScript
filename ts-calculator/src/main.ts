import './style.css';

type Operator = '+' | '-' | 'x' | '÷' | '=';
type ComputedValue = {
  [key in Exclude<Operator, '='>]: (num1: number, num2: number) => number;
};

interface CalculatorInterface {
  tempValue: string | number;
  tempOperator?: Operator | string;
  // NOTE: ? 를 붙이면 undefined나 null 같은 지정되지 않은 값도 받을 수 있다.
  render(inputValue: string | number): void;
  reset(): void;
  Calculate(operator: Operator | string): void;
  initEvent(): void;
}

const VALID_NUMBER_OF_DIGITS = 3;
const INIT_VALUE = 0;
const OPERATORS = ['+', '-', 'x', '÷'];

const validateNumberLength = (value: string | number) => {
  return String(value).length < VALID_NUMBER_OF_DIGITS;
};

const isZero = (value: string) => Number(value) === 0;

const getComputedValue: ComputedValue = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  x: (num1, num2) => num1 * num2,
  '÷': (num1, num2) => num1 / num2,
};

const Calculator: CalculatorInterface = {
  //TODO: render()는 클래스형컴포넌트할 때 쓴다고 봤는데, 여기서 왜 나와?
  tempValue: INIT_VALUE,
  tempOperator: undefined,
  render(inputValue: string | number) {
    const resultEl = <HTMLDivElement>document.querySelector('#result');
    const prevValue = resultEl.innerText;

    if (!validateNumberLength(prevValue)) {
      alert('세자리 이상의 값을 입력할 수 없습니다.');
      return;
    }
    if (resultEl) {
      resultEl.innerText = isZero(prevValue) ? String(inputValue) : String(prevValue + inputValue);
    }
  },
  reset() {
    const resultEl = <HTMLDivElement>document.querySelector('#result');

    resultEl.innerText = String(INIT_VALUE);
    this.tempValue = INIT_VALUE;
    this.tempOperator = undefined;
  },
  Calculate(operator: Operator | string) {
    const isReadyCalculated = operator === '=' && this.tempOperator && OPERATORS.includes(this.tempOperator);

    const isTempCalculated = OPERATORS.includes(operator);
    if (isTempCalculated) {
      const resultEl = <HTMLDivElement>document.querySelector('#result');

      this.tempOperator = operator;
      this.tempValue = Number(resultEl.innerText);

      resultEl.innerText = String(0);

      return;
    }

    if (isReadyCalculated) {
      const resultEl = <HTMLDivElement>document.querySelector('#result');

      const resultValue = getComputedValue[this.tempOperator as Exclude<Operator, '='>](
        Number(this.tempValue),
        Number(resultEl.innerText)
      );

      resultEl.innerText = String(resultValue);
    }
  },
  initEvent() {
    const buttonContainerEl = document.querySelector('.contents');

    // NOTE: ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.
    buttonContainerEl?.addEventListener('click', ({ target }) => {
      const buttonText = (target as HTMLButtonElement).innerText;

      // NOTE: eventlistener 안에서 쓰면 this는 e.currentTarget
      if (buttonText === 'AC') {
        this.reset();

        return;
      }
      if (OPERATORS.concat('=').includes(buttonText)) {
        this.Calculate(buttonText);

        return;
      }

      if (!Number.isNaN(buttonText)) {
        this.render(Number(buttonText));
      }
    });
  },
};

Calculator.render(INIT_VALUE);
Calculator.initEvent();
