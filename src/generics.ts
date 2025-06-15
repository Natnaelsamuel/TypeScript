class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, 'One');
pair.key = 2; 
let pair2 = new KeyValuePair('1', 'a');