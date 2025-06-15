class Logger {
    constructor(public fileName: string) {}

    write(message: string): void{
        console.log(`writing to ${this.fileName}: ${message}`);
    }
}

let log1 = new Logger('hello.txt');
log1.write('Hello, World!');

class person2 {
    constructor(public firstName: string, 
                public lastName: string) {}
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee2 extends person2 {
    constructor(public salary: number, 
                firstName: string, 
                lastName: string) {
        super(firstName, lastName);
    }
}

interface IAddress {
    street: string;
    city: string;
    zipCode: number;
}
interface IEmployee1 {
    name: string;
    salary: number;
    address: IAddress;
}