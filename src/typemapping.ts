interface Product {
    name: string;
    price: number;
}

type ReadOnly<T> = {
    readonly [p in keyof T]: T[p];
}
type Optional<T> = {
    [p in keyof T]?: T[p];
}
type Nullable<T> = {
    [p in keyof T]?: T[p] | null;
}

let product: ReadOnly<Product> = {
    name: 'a',
    price: 1
};

// refer to utility types in TypeScript
// built in utility types