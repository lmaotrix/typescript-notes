
- **BY DEFAULT** when declaring an array it seems like typescript gives it a type of *never*. This makes it important to set the type of the array as well when declaring it.
```
const superHeroes = [] // type never by default

superHeroes.push("spiderman")
```
pushing a string to the array gives an error because you can't add something of type string to an array of type never.

**The correct way would be:**
```
const superHeroes: string[] = []
superHeroes.push("spiderman")
```
now pushing a string to the array doesn't give an error because the array is now of type 'string[]'

- another way to declare an array is by doing this:
```
const heroPowers: Array<number> = []
```
this way of declaring arrays is exactly the same as the previous one, but it's seen in many code bases so it's still good to know this.

## Combining type aliases and arrays 

- obviously we can also combine type aliases and use them to classify an array like in the following example:
```
type User = {
	name: string;
	isActive: boolean
}
const allUsers: Array<User> = []
allUsers.push({
	name: "gian",
	isActive: true
})
```

### Arrays with arrays inside:

- you can declare an array and put inside of it an array of a specific type as well:
```
const MLModel: number[][] = [
	[255, 255, 255],
	[]
]
```
- basically the type used here is telling us that the array we are declaring should contain only arrays of numbers.

[[Union Types]]