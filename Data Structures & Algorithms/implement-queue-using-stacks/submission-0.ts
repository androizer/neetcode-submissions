/** FIFO */
class MyQueue {
  private stack: number[];
  constructor() {
    this.stack = [];
  }

  /** Pushes element x to the back of the queue. */
  push(x: number): void {
    this.stack.unshift(x);
  }

  /** Removes the element from the front of the queue and returns it. */
  pop(): number {
    return this.stack.pop();
  }

  /** Returns the element at the front of the queue. */
  peek(): number {
    return this.stack[this.stack.length - 1];
  }

  /** Returns true if the queue is empty, false otherwise. */
  empty(): boolean {
    return this.stack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
