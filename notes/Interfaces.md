- An interface in TypeScript is a way to define the shape or structure of an object. It describes the properties and methods an object should have without implementing them. Interfaces are useful for defining contracts in your code and ensuring that objects conform to a certain structure.
- Another thing that makes interface particular is it's ability to define functions inside of it in 2 ways
**Example of interface with embedded function**
```
// solution 1

interface User {
	readonly dbId: number, 
	email: string,
	googleId?: string,
	startTrial: () => string
}

const gian: User {
	dbId: 22,
	email: "h@h.com",
	startTrial: () => {
		return "trial started"
	}
}
```

or

```
// solution 2

interface User {
	readonly dbId: number,
	email: string,
	googleId?: string,
	startTrail(): string
}

const gian: User {
	dbId: 22,
	email: "h@h.com",
	startTrial: () => {
		return "trial started"
	}
}
```
*solution 2 would typically be preferred when coding since it's more readable and easier to understand*


#### Interfaces with functions and arguments
**Example of functions with arguments inside an interface**

```
interface User {
	readonly dbId: number,
	email: string,
	googleId?: string,
	startTrail(): string,
	getCoupon(couponname: string, value: number): number
}

const gian: User {
	dbId: 22,
	email: "h@h.com",
	startTrial: () => {
		return "trial started"
	}
	getCoupon: (name: "gian10", off: 10) => {
		return 10
	}
}
```
*from what we can see we didn't need to use the name 'couponname' when calling the function, but we used just 'name'*

## Interface Vs Type

- With interfaces, we can add properties from an already existing interface inside a package/library
- With interfaces we also have the aspect of inheritance through the keyword 'extends', which allows to create another interface inheriting the same characteristics of the initial one.
**Example of the usage of the extends keyword**
```
interface User {
	readonly dbId: number,
	email: string,
	googleId?: string,
	startTrail(): string,
	getCoupon(couponname: string, value: number): number
}

// adding a value if interface is on another file/package
interface User {
	githubToken: string
}

// inheritance (extends keyword)
interface Admin extends User {
	role: "admin" | "at" | "learner"
}
```

### How to implement an interface
- when implementing an interface it is important to include every feature the interface has
**Example of implementation of an interface**
```
interface TakePhoto {
	cameraMode: string
	filter: string
	burst: number
}

interface Story {
	createStory(): void
}

class Instagram implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
		
	){}
}

class Youtube implements TakePhoto, Story {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number,
		public short: string
	){}

	createStory(): void {
		console.log("story was created")
	}
}
```
*to implement a method created in an interface inside a class we need to create a new method with the exact same name.*

[[Coding/languages/Typescript/Setup For Real Projects]]