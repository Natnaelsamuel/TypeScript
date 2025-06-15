// Decorators
// called once
type ComponentOptions = {
    selector: string;
}

// Decorator factory
function Component(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('component decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqurId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting component in DOM');
        };
    }
}

function Pipe(constructor: Function) {
    console.log('pipe decorator called');
    constructor.prototype.pipe = true;
}


@Component({ selector: '#my-profile' })
@Pipe
// f(g(x))
class ProfileComponent {
} 

// Method decorators
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value as Function;
    descriptor.value = function(...args: any) {
        console.log('Before');
        original.call(this, ...args);
        console.log('After');
    }
}

function Capitalize(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function() {
        const result = original?.call(this);
        return (typeof result === 'string') ? result.toUpperCase() : result;
    }
}

class Person {

    constructor(public firstName: string, public lastName: string) {}
    
    @Log
    say(message: string) {
        console.log(`Person says: ${message}`);
    }

    @Capitalize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let human = new Person('Natnael', 'Samuel');
console.log('person.fullName');

// Property Decorator
function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() {
                return value;
            },
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} must be at least ${length} characters long`);
                value = newValue;
            }
        };

        Object.defineProperty(target, propertyName, descriptor);
    }
}
class User {
    @MinLength(4)
    password: string;
    constructor(password: string) {
        this.password = password;
    }
}

let newUser = new User('1234');
console.log(newUser.password);

// Parameter Decorator
type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

const WatchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    WatchedParameters.push({
        methodName,
        parameterIndex
    });
}

class Vehicle {
    move(@Watch speed: number) {}
}

console.log(WatchedParameters);