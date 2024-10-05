## what are type aliases used for?

- Type aliases are commonly used to create new data types related to objects (can be compared to structs in C)

**Example of a type alias being created and used** 
```
type User = {
	name: string;
	email: string;
	isActive: boolean
}
function createUser(user: User){}
createUser({name: "", email: "", isActive: true})
```

- basically type aliases are used whenever you want to use the same object more times.

## Readonly and Optional

- **Readonly**: used to make a property immutable, meaning it can only be assigned a value when the object is first created. After that, the value cannot be changed. 

**example of readonly being applied**
```
type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean
}
let myUser = {
	_id: "1245",
	name: "h",
	email: "h@h.com",
	isActive: false
}
myUser._id = "asasap" // this line will give an error because of the readonly 
```
- You can assign a value to _id when creating a User object.

- You cannot change the value of _id after the object is created.

- If you try to reassign a value to myUser._id, TypeScript will show an error during compilation.


- **Optional**: used to make a property optional, meaning it doesn't necessarily need to have a value added when using the object

**Example of optional being applied**
```
type User = {
	readonly _id: string;
	name: string;
	email: string;
	isActive: boolean;
	credcardDetail?: number
}
let myUser = {
	_id: "1245",
	name: "h",
	email: "h@h.com",
	isActive: false
}
```
-  Optional can be used by adding a question mark (?) right after the object's property name.\

## Mix and Match of types

- you can match more type aliases' content together in a new type.
**example of types mixed together**

```
type cardNumber = {
	cardnumber: string
}
type cardDate = {
	cardDate: string
}
// mixed types
type cardDetails = cardNumber & cardDate & {
	cvv: number
}
```

[[Arrays]]