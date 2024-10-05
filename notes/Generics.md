
- Generics make your components reusable
- Even arrays are generics behind the scenes
- Generic types act on the data types instead of the values themselves

```
// without generics we'd have to give everything a specific type
function identity(arg: number): number {
	return arg
}

// or use the 'any' type (not a good idea)
function identity(arg: any): any {
	return arg
}

// last but not least we can use a type variable
function identity<Type>(arg: Type): Type {
	return arg
}
```
- *The type variable 'Type' captures the type the user provides and keeps that information for later use.*
- *this type variable is different from using 'Any' because it doesn't lose any information and it is as accurate as setting a specific data type.*
- *this third function definition using the type variable Type isn't used a lot*

**How type variables are used irl**
```
function identityFour<T>(val: T): T {
	return val;
}
```

- When you create your own data type and want to call a function that uses a type variable the syntax to call the function changes a bit:

```
interface Bottle {
	brand: string,
	type: number
}

identityFour<Bottle>({})
```
### What is a component?

- A component isn't necessarily a React component
- A component is a chunk of code 
- Even a single function could be a component

### Generics in Arrays and Arrow functions

- we can define a function and take input as an array:

```
function getSearchProducts<T>(products: T[]): T {
	return products[3]
}
```
*the return type needs to be one of the types used in the array if 'T' is set as a return type*

#### Arrow functions with generics

```
const getMoreSearchProducts = <T>(products: T[]): T => {
	//dboperations
	const myIndex = 4
	return products[myIndex];
}
```
*The only difference other than the structure is where the generic type definition is placed with the angled brackets.*

- Another thing that is seen a lot is this `<T,>`, this is used to tell whoever reads the code that it isn't an html tag or a custom tag but that it is a generic.

#### Adding restrictions to generics

- by using the keyword 'extends' we can add restriction to the type of value a generic input accepts
**Example**
```
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
```


### Generic [[Classes]]

- Generic classes in TypeScript allow you to define a class with a type parameter, making the class reusable for different types without sacrificing type safety
- Instead of hardcoding a specific type, a generic class uses placeholders for types
**Example**
```
interface Quiz {
	name: string,
	type: string
}
interface Course {
	name: string,
	author: string,
	subject: string
}

class Sellable<T> {
	public cart: T[] = []

	addToCart(products: T) {
		this.cart.push(products)
	}
}
```
- The `Sellable<T>` class is a **generic class**. The `T` represents a generic type parameter, which means this class can be used for multiple types (`Quiz`, `Course`, or any other type).
- `T[]`: This indicates that `cart` will be an array that can store objects of the generic type `T`. When the class is used, `T` can be substituted with a specific type, like `Quiz` or `Course`

[[Coding/languages/Typescript/Type Narrowing]]