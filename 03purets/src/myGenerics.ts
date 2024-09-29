const score: Array<number> = []
const names: Array<string> = []

// valid but too much confusion
function identityOne(val: boolean | number): boolean | number {
    return val
}

// even worse (info about type is gone)
function identityTwo(val: any): any {
    return val
}

// best solution (but least used)
function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(True)

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

// identityFour<Bottle>({})


function getSearchProducts<T>(products: T[]): T {
    //dboperations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    // dboperations
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, {connection: "123", username: "gl", password: "1234"})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(products: T) {
        this.cart.push(products)
    }
}