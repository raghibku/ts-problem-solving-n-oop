# Access Modifiers in TypeScript

Access modifiers set the accessibility and visibility of class members (properties and methods). The keywords `public`, `private` and `protected` control visibility, while `readonly` controls mutability.

**Public:** Public members can be accessed from anywhere: inside the class, in subclasses and from outside the class instance. It is the default, so if you don't write any modifier, the member is public.

**Private:** Private members can only be accessed inside the same class. They can't be accessed from outside or even from subclasses. We usually use getters and setters to work with private members, which keeps encapsulation.

**Protected:** Protected is almost like private, but subclasses can access it. It still can't be accessed from outside the class instance.

**Readonly:** It is not a visibility modifier like the others. It makes a property immutable. A readonly property must be set at its declaration or inside the constructor.

```ts
class BankAccount {
  public owner: string;
  private balance: number;
  protected type = "savings";
  readonly id: number;

  constructor(owner: string, balance: number, id: number) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }

  getBalance() {
    return this.balance;
  }
}

class StudentAccount extends BankAccount {
  showType() {
    return this.type; // works, subclasses can see protected members
    // this.balance   // nope, balance is private to BankAccount
  }
}

const acc = new BankAccount("Sam", 500, 1);
acc.owner;      // fine, it's public
// acc.balance  // error, can't touch a private field from outside
// acc.id = 2   // error, id is readonly so it can't change after the constructor
```

Use `private` to protect data inside a class, `protected` when subclasses need access, and `readonly` for values that shouldn't change. Leave everything else `public`.
