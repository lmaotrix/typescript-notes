-  We use functions to separate blocks of code that explain specific actions 

**example of a proper function declaration in typescript**
```
function addTwo(num: number) {
	return num + 2;
}
addTwo(5);
```
* what makes this typescript function declaration different from javascript is the fact it allows you to set the data type of the parameter


**example of a proper arrow function declaration in typescript**
```
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
	
}

or 

let loginUser = (name: string, email: string, isPaid) => {
	if (isPaid === void 0) {
		isPaid = false;
	} 
}
```
* both of the arrow functions use the concept of default parameter value,  but the second one makes it easier to understand explaining that if the value of 'isPaid' when calling the function is missing then it will be immediately be set to false.

## How to make functions return more accurate values?

**issue example**
```
function addTwo(num: number) {
	return "Hello";
}
addTwo(5);
```
this function doesn't make sense and it wouldn't make sense to make it return something that isn't a number, but how do we fix this?

```
function addTwo(num: number): number {
	return num + 2
	// return "hello" now gives an error.
}

or

let addTwo = (num: number):number => {
	return num + 2;
}

```
* what we did is set the data type that is supposed to be returned from the function right after declaring the parameters

- **Declaring the return value's data type is often a good idea when working on a big project to make sure your colleagues don't involuntarily break your app**

## How to make a Function return two or more specific datatypes?




[[Objects]]
