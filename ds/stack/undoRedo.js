const Stack = require('./stack');

class Processor {
  constructor() {
    this.actionStack = new Stack(10);
    this.redoStack = new Stack(10);
  }

  action(name) {
    console.log(`Performing ${name}`);
    this.actionStack.push(name);
  }

  undo() {
    console.log(`Undoing ${this.actionStack.peek()}`);
    this.redoStack.push(this.actionStack.pop());
  }

  redo() {
    console.log(`Redoing ${this.redoStack.peek()}`);
    this.actionStack.push(this.redoStack.pop());
  }

  state() {
    let top = this.actionStack.top;
    process.stdout.write('Current State: \t');
    while (top > -1) {
      process.stdout.write(this.actionStack.items[top--] + ' --> ')
    }
    process.stdout.write('END\n');
  }
}

if (require.main === module) {
  const p = new Processor();
  p.action('type A');
  p.action('type B');
  p.action('type C');
  p.undo();
  p.redo();
  p.undo();
  p.undo();
  p.action('type Z')
  p.state();
}
