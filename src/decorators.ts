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

class Person {
    
    @Log
    say(message: string) {
        console.log(`Person says: ${message}`);
    }
}

let person3 = new Person();
person3.say('hello');