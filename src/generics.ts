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

interface Product1 {
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

   add(obj: T): void {
        this.objects.push(obj);
    }

    // T is Product 
    // keyof T => 'name' | 'price'
    find(property: keyof T, value: unknown): T | undefined {
        return this.objects.find(obj => 
            obj[property] === value);
    }
}
let store1 = new Store<Product>();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
store1.find('price', 1);

//passing on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
    findSearchableStore(name: string): T | undefined {
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