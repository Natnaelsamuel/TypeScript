// classes
class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor(
                public readonly id: number, 
                public owner: string, 
                private _balance: number) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    depsosit(amount: number): void {
        if (amount <= 0) 
            throw new Error('Invalid amount');
        this._balance += amount;
    }

    // Private method
    // private calculateTax() {
    // }

    get balance(): number {
        return this._balance;
    }
    set balance(value: number) {
        if (value < 0) 
            throw new Error('Invalid amount');
        this._balance = value;
    }
}

// Objects
let account = new Account(1, 'Natnael', 0);
account.depsosit(100);
console.log(account.balance);
console.log(account instanceof Account);

// index signature
class SeatAssignment {
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Natnael';
seats['A2'] = 'John';

// Static members
class Ride {
    private static _activeRides: number = 0;

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }

    static get activeRides() {
        return Ride._activeRides;
    } 
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);

// Inheritance
class person {
    constructor(
        public firstName: string, 
        public lastName: string) {
        }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }  

    walk() {
        console.log(`walking`);
    }
}

class Student extends person {
    constructor(
        public studentId: number,
        firstName: string,
        lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        console.log(`taking a test`);
    }
}

class Teacher extends person {
    // override get fullName() {
    override get fullName() {
        return `Professor ${super.fullName}`;
    }  
}


let teacher = new Teacher('Natnael', 'Samuel');
console.log(teacher.fullName);

// Polymorphism
class Principal extends person {
    override get fullName() {
        return `Principal ${super.fullName}`;
    }  
}

printNames([
    new Student(1, 'John', 'Doe'),
    new Teacher('Jane', 'Smith'),
    new Principal('Alice', 'Johnson')
])

function printNames(people: person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}

// Abstract classes and methods
abstract class Shape {
    constructor(public color: string) {}

    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log('rendering a circle');
    }
}

// abstract class Calender {
//     constructor(public name: string) {}

//     abstract addEvent(): void;
//     abstract removeEvent(): void;
// }

// Interfaces
interface Calender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalender extends Calender {
    sync(): void;
}
class GoogleCalender implements Calender {
    constructor(public name: string) {}

    addEvent(): void {
        console.log('adding event to Google Calender');
    }

    removeEvent(): void {
        console.log('removing event from Google Calender');
    }
}