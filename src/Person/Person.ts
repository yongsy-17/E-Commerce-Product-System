export class Person {
  constructor(
    private id: number,
    private name: string,
    private age: number,


  ) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  public getName(): string {
        return this.name;
    }
  getId():number{
    return this.id
  }
  getAge():number{
    return this.age
  }
}
