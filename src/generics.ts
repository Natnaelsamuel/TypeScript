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