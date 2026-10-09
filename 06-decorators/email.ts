function notifyChange(target: Function, context: ClassMethodDecoratorContext) {
  return function (this: userAccount, newStatus: string): void {
    console.log(`[NOTIFICATION]: Status changed to: ${newStatus}`);

    target.call(this, newStatus);
  };
}

function disableDelete<T extends { new (...args: any[]): object }>(
  constructor: T,
  context: ClassDecoratorContext,
) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      const prototype = Object.getPrototypeOf(this);

      for (const name of Object.getOwnPropertyNames(prototype)) {
        if (name === "constructor") continue;

        const descriptor = Object.getOwnPropertyDescriptor(prototype, name);

        if (descriptor && typeof descriptor.value === "function") {
          Object.defineProperty(this, name, {
            value: descriptor.value.bind(this),
            writable: false,
            configurable: false,
          });
        }
      }
    }
  };
}

@disableDelete
class userAccount {
  status: string;

  constructor(status: string) {
    this.status = status;
  }

  @notifyChange
  updateStatus(newStatus: string): void {
    this.status = newStatus;
  }
}

const user = new userAccount("Inactive");

console.log("Initial status:", user.status);

user.updateStatus("Active");

console.log("Current status:", user.status);

user.updateStatus("Suspended");

console.log("Current status:", user.status); //nice
