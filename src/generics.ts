// Generic Classes 
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, 'One');
pair.key = 2; 
let pair2 = new KeyValuePair('1', 'a');

// Generic Functions
class ArrayUtils {
    static wrapInArray<T>(value: T) {
        return [value];
    }
}
let numbers = ArrayUtils.wrapInArray(1);

// Generic Interfaces
// http://mywebsite.com/users
// http://mywebsite.com/products
interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null };
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<User>('url');
result.data?.username

// Generic constraints
function echo<T extends number | string>(value: T): T {
    return value;
}
echo('true');

interface Product {
    name: string;
    price: number;
}

class Store<T> {
    protected objects: T[] = [];

    private _add(object: T): void {
        this.objects.push(object);
    }
}
//passing on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}
let store = new CompressibleStore<Product>();
store.compress();

// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this.objects.find(obj => 
            obj.name === name);
        }
}

// Fxing the generic type parameter
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}