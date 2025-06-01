export class Person {
  constructor(
    private id: number,
    private name: string,
    private age: number,
  ) {}
  public getName(): string {
        return this.name;
    }
}
