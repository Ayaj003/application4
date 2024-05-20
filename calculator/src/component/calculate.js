export const calculate = (equation) => {
    const stack = [];
    const queue = [];

    equation.forEach(token => {
        if (!isNaN(token)) {
            queue.push(token);
        } else {
            while (
                stack.length &&
                precedence(stack[stack.length - 1]) >= precedence(token)
            ) {
                queue.push(stack.pop());
            }
            stack.push(token);
        }
    });

    while (stack.length) {
        queue.push(stack.pop());
    }

    const resultStack = [];
    queue.forEach(token => {
        if (!isNaN(token)) {
            resultStack.push(parseFloat(token));
        } else {
            const b = resultStack.pop();
            const a = resultStack.pop();
            switch (token) {
                case '+':
                    resultStack.push(a + b);
                    break;
                case '-':
                    resultStack.push(a - b);
                    break;
                case '×':
                    resultStack.push(a * b);
                    break;
                case '÷':
                    resultStack.push(a / b);
                    break;
                default:
                    break;
            }
        }
    });

    return resultStack.pop();
};

const precedence = (operator) => {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '×':
        case '÷':
            return 2;
        default:
            return 0;
    }
};
