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


@Component({ selector: '#my-profile' })
class ProfileComponent {
} 