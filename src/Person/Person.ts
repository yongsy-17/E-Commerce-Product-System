export class Person {
  constructor(
    private id: number,
    private name: string,
    private age: number
  ) {}

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public toString(): string {
    return `Person[ID=${this.id}, Name=${this.name}, Age=${this.age}]`;
  }
}
