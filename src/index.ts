// tuple
let user: [number, string] = [1, 'Natnael'];
user.push(2);

// enum (PascalCase)
enum Size {Small = 1, Medium, Large};
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 0.1;
    return income * 1.3;
}
calculateTax(10_000, 2022)

// Object + type alias
type Employee = {
    readonly id: number;
    name: string,
    retire: (date: Date) => void;
}

let employee: Employee = { 
    id: 1, 
    name: '',
    retire: (date: Date) => {
        console.log(date);
    }
};
employee.name = 'Natnael';

// union type
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number') 
        return weight * 2.2;
    else
    return parseInt(weight) * 2.2;
}

// intersection type
type Draggable = {
    drag: () => void;
}
type Resizable = {
    resize: () => void;
}
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

// Literal (exact, specific value)  
type Quantity = 50 | 100;
let quantity: Quantity = 50;

// nullable type
function greet(name: string | null | undefined) {
    // Optional chaining (optional property access operator)
        console.log(name?.toUpperCase());
}
greet(null);
greet(undefined);

// Nullish coalescing operator
let speed: number | null = null;
let ride = {
    speed: speed ?? 30 // if speed is null or undefined, use 30
};

// Type assertions (Not type conversion!), We can also use as keyword
let phone = <HTMLInputElement> document.getElementById('phone');
phone.value = '123-456-7890';

// Unknown type
function render(document: unknown) {
    if (typeof document === 'string') {
        console.log(document.toUpperCase());
    } else if (document instanceof HTMLElement) {
        console.log(document.innerHTML);
    } else {
        console.log('Unknown document type');
    }
}