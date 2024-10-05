### How to create classes in Typescript?

**code snippet**
```
class User {
	email: string
	name: string
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
}

const gian = new User("g@g.com", "Gianluca")
```
*a few notes when using classes are:*
- we're passing arguments in a constructor; it is always advised to declare the type of the variables that are going to be used inside the class right before the constructor.
- when creating an object with the class that was created, you don't need to mention the parameters when setting their values.

### Abstract classes

Abstract classes help to define the class that is inheriting its properties and give it a better structure

- No objects can be created from it
- the only way to create an object from an abstract class is to create it referencing another class inheriting the properties (in this case through 'extends' keyword)
- we can declare functions inside of an abstract class by using the keyword 'abstract'
**Example of abstract classes**
```
abstract class TakePhoto {
	constructor(
		cameraMode: string,
		filter: string
	){}

	abstract getSepia(): void // I just know this function has to be in the code, don't know how to implement it yet
}

class Instagram extends TakePhoto {

}

const gianluca = new Instagram("test","test")
```
*abstract classes can be seen as an actual blueprint for the code that has to be written*

- Very often in code we will see this kind of scenario, which is why it's important to see it right now.

```
abstract class TakePhoto {
	constructor(
		cameraMode: string,
		filter: string
	){}
}

class Instagram implements TakePhoto {
	constructor(
		public cameraMode: string,
		public filter: string,
		public burst: number
	){
		super(cameraMode, filter)
	}
}
```
*Basically when creating a constructor inside a class inheriting from an abstract class you need to use the method 'super()' inside of the curly brackets and insert the required values (all the properties created in the abstract class).*
[[Coding/languages/Typescript/Access Modifiers]]
