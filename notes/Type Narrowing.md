- If we pass a number array and other types as a function argument we need to check the array as an object since that is how javascript works

if a value will or will not be passed to a function we can do like this:
```
function provideId(id: number | null) {
	if (!id) {
		console.log("Please provide ID");
		return
	}
	id.toLowerCase
}
```

### Type Guards
- we use the `Typeof` keyword to add an extra guard when adding more types as arguments to a function (extra checks)

### The `in` operator narrowing
- The `in` keyword is useful to narrow and understand which interface/custom type has a specific property
**Example**
```
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}
```

### `instanceof` narrowing
- the `instanceof` keyword checks if something is an instance of a class
- unlike the `in` keyword, which checks only for default types, `instanceof` checks for instances in everything that can be created using the `new` keyword
**Example**
```
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
```
### Using type predicates
**Definition**
- A **type predicate** in TypeScript is a way to let TypeScript know what type a value or variable is based on a condition. Type predicates are typically used in **user-defined type guards**, allowing for more accurate type narrowing within functions.

**Syntax**
- A type predicate is defined using the `parameterName is Type` syntax in a function’s return type. This tells TypeScript that, if the function returns `true`, the parameter is of the specified type.
**Example**
```
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined // we're saying that pet is a Fish if it has .swim and isn't undefined
}

function getFood(pet: Fish | Bird) {
	if (isFish(pet)) {
		pet
		return "fish food"
	} else {
		pet
		return "bird food"
	}
}
```

### Discriminated Unions
- A discriminated Union is a pattern where a union of objects is differentiated by a shared, literal property (called the `discriminant`)
- This property is used to **distinguish** between different types in the union, allowing for effective type narrowing within conditions.
**Example**
```
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sides: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    }
    return shape.sides * shape.sides
}
```

#### Exhaustive checking
- exhaustive checking is used to ensure all possible cases of **Union Types** by using `switch` statements.

**Example**
```
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.sides * shape.sides
        default:
	        const _defaultForShape: never = shape
	        return _defaultForShape
    }
}
```
*It is important to remember that you should always have a default case of type **never** in your switch statements*
- if you eventually add an interface and it is used but not checked, the default will throw an error, reminding you to add a case in your switch statement for it

<hr>
# The End.

[[Typescript-----index]] 