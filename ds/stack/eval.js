const Stack = require('./stack');

const isOperator = (term) => '+-*/^'.indexOf(term.toLowerCase()) > -1;
const isOperand = (term) => 'abcdefghijklmnoprstuvwxyz0123456789'.indexOf(term.toLowerCase()) > -1;
const precedence = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '^': 3
};

const infixToPostfix = (expr) => {
  const stack = new Stack(expr.length);
  let postFix = '';

  for (const term of expr) {
    switch (true) {
      case isOperand(term):
        postFix += term;
        break;

      case isOperator(term):
        while (!stack.isEmpty() && precedence[term] <= precedence[stack.peek()]) {
          postFix += stack.pop();
        }
        stack.push(term);
        break;

      case term === '(':
        stack.push(term);
        break;

      case term === ')':
        while (!stack.isEmpty() && stack.peek() !== '(') {
          postFix += stack.pop();
        }
        stack.pop();
        break;

      default:
        break;
    }
  }

  while (!stack.isEmpty()) {
    postFix += stack.pop();
  }

  return postFix;
}

const evaluate = (expr) => {
  const postFix = infixToPostfix(expr);

  const stack = new Stack(expr.length);

  for (const term of postFix) {
    switch (true) {
      case isOperand(term):
        stack.push(term);
        break;

      case isOperator(term):
        const term1 = stack.pop();
        const term2 = stack.pop();
        const result = eval(`${term2} ${term} ${term1}`);
        stack.push(result);
        break;

      default:
        break;
    }
  }

  return stack.peek();
};


console.log(evaluate('1 + (7 - 5) * 2 / (4 - 2)'));
