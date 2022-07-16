function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function Command(execute, undo, leftValue, rightValue) {
    this.execute = execute;
    this.undo = undo;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
}

export function AddCommand(leftValue, rightValue) {
    return new Command(add, sub, leftValue, rightValue);
}

export function SubCommand(leftValue, rightValue) {
    return new Command(sub, add, leftValue, rightValue);
}

export function MulCommand(leftValue, rightValue) {
    return new Command(mul, div, leftValue, rightValue);
}

export function DivCommand(leftValue, rightValue) {
    return new Command(div, mul, leftValue, rightValue);
}

export function CalculatorCreater() {
    let current = 0;
    const commands = [];

    return {
        execute(command) {
            current = command.execute(command.leftValue, command.rightValue);
            commands.push(command);
        },

        undo() {
            const command = commands.pop();
            current = command.undo(current, command.rightValue);
        },

        getCurrentValue() {
            return +current.toFixed(3);
        },

        clearCurrentValue() {
            current = 0;
        },
    };
}
