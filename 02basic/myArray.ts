const superHeroes: string[] = []
// const heroPowers: number[] = []
// or
const heroPowers: Array<number> = []

superHeroes.push("spiderman")
heroPowers.push(2)

// combining type aliases and arrays
type User = {
	name: string;
	isActive: boolean
}

const allUsers: Array<User> = []

allUsers.push({
	name: "gian",
	isActive: true
})

// arrays inside of arrays
const MLModels: number[][] = [
    [255, 255, 255],
    []
]
