- A tuple is an array with a pre-defined length and type for each index.
- Tuples are really useful in the context of API calls whereas the values might need to be in a specific order

**example of tuple initialization:**
```
const myTuple: [number, string]
```

## Combining Types with tuples

**example**
```
type User = [number, string]
const newUser: User = [112, "example@gmail.com"]
newUser[1] = "hc.com" 
```


[[Coding/languages/Typescript/Enums]]