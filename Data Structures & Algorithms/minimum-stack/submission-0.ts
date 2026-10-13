class MinStack {
  min: number;
  stack: number[];
  minStack: typeof this.stack;
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value: number): void {
    this.stack.unshift(value);
    const minValue = Math.min(value, this.minStack[0] ?? value);
    this.minStack.unshift(minValue);
  }

  pop(): void {
    this.stack.shift();
    this.minStack.shift();
  }

  top(): number {
    return this.stack[0];
  }

  getMin(): number {
    return this.minStack[0];
  }
}