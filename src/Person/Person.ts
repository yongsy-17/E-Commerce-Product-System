export abstract class Person {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
    
    abstract getDetails(): string;
    
    getContactInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}