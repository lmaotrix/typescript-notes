### Private and Public
- these keywords affect the scope of a variable, whereas:

	- public: the variable is accessible within the entire codebase
	- private: the variable is accessible only within the class it's declared in.
- by default variables are set to public.

**Example of public and private variables**
```
class User {
	public email: string
	name: string
	private readonly city: string = "Milan"
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name
	}
}

const gian = new User("g@g.com", "Gianluca")
```
*Another way to mention the private keyword is by saying "#" right before the variable name*

- As there can be private properties there can be private methods as well.

### Getters and Setters
- Getters and Setters are methods used to control access to an object's properties.
- Getter: A method that retrieves the value of a property.
- Setter: A method that sets or updates the value of a property

*They allow for more control over how properties are accessed and modified.*

- they're useful to perform validation or additional logic when getting or setting a value.
- it's **important** to know that with setters in typescript you're not supposed to add a return data type.
**Example of getters and setters**
```
class User {

    private _courseCount = 1

    readonly city: string = "Milan"
    constructor(

        public email: string,
        public name: string,
        // private userId: string
        ){
        // code here
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should not be more than 1")
        }
        this._courseCount = courseNum
    }
}
```


### Protected
- this keywords makes a property accessible withing its specific class and all classes that inherit those properties.
*It is important to remind that to use inheritance in a class we use the keyword 'extends'*

**Example of protected in use**
```
class User {
	protected _courseCount: number = 1

	get courseCount(): number {
		return this._courseCount
	}

	set courseCount(courseNum){
		if (courseNum <= 1){
			throw new Error("Course count should not be more than 1")
		}
		this._courseCount = courseNum
	}
}

class SubUser extends User {
	isFamily: boolean = true
	changeCourseCount(){
		this._courseCount = 4
	}
}
```


[[Coding/languages/Typescript/Generics]]