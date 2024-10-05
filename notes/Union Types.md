- Union Types become useful when you're **NOT SURE** of what type comes into a function and supposedly what type the function will return.
- Instead of using the "Any" type it is always advised to use Union types.

**Example of the usage of union types**
```
let score: number | string = 33
```
*as we can see the union type is represented by the pipe operator **"|"** * 

- The downside of Union Types comes when you need to manipulate the function's parameters as shown below:
```
function getDbId(id: number | string) {
	id.toUpperCase() // this line will throw an error
}
```
*the commented line will throw an error because since the method that we were trying to use is string-specific and the function the method is used in accepts parameters that can also be number then it can't work* // review this explanation for godness' sake :(

- in order to solve this downside and still use union types we need to have strongest checks since typescript recognizes the two types as one:
```
function getDbId(id: number | string) {
	if (typeof id === "string") {
		id.toUpperCase()
	}
}
```
*by doing this extra check we make sure what type is being passed as an argument in order to be able to manipulate the values properly*


## Union Types and Arrays

- We can combine union types and arrays by assigning the array more than a single type in a slightly less intuitive way than with variables:
```
const data: (string | number)[] = [1,2,3,"4"]
```
*as we can see with arrays we have to wrap the types of array inside some parentheses*

[[Coding/languages/Typescript/Tuples]]