**How to create an object in typescript**
```
const User = {
	name: "gianluca",
	email: "coco.gian07@gmail.com",
	isActive: true
}
```
* objects should be created with the first letter being uppercase

## How are Objects used?

- Objects are used through functions, where they are either passed as arguments or returned as the result of a process in the function

**example of object being passed as a function argument**
```
function createUser({name: string, isPaid: boolean}) {
	// code here
}
createUser({name: "Gianluca", isPaid: false})
```

**example of an object being used as a return type**
```
function createCourse():{name: string, price: number}{
	return {name: "reactjs", price: 50}
}
```
- where **:{name: string, price: number}** is the return type being set to an object

[[Type Aliases]]