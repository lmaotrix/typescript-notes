
## Introduction:

- TypeScript is a **superset** of javascript because typescript = more features + error checks
- TypeScript code is compiled to javascript
- Tyepscript allows to write javascript in a more precise manner in bigger projects


### What typescript does:

1. static checking: syntax constantly being analysed when coding (without running the code)
2. compiles .ts code to .js
3. typescript is just a development tool, meaning your project is still using javascript
4. allows the devs to write more scalable code (ie. bigger applications)
5. new keywords!


### Type safety:

- Throws warnings when doing operations with different data types
		in javascript:
		ex. 2 + "2" = '22'
		ex. null + 2 = 2
		ex. undefined + 2 = NaN

		in typescript:
		ex. warning
		ex. warning
		ex. warning

```
let person = {name: Gian, age: 17}
let email = person.email /*throws an error because of static type checking*/
```

```
let person = {name: Gian, age: 17}
let email = person.email /*throws error in browser when running the code*/
```

### How to execute typescript file:

```
npx tsc + filename (in command line interface)
```

### File names in typescript:
- .ts = pure typescript file
- .tsx = component-level typescript file

### What situations does typescript fit the best in?
- allows to avoid manual type checking when writing functions
- 

## Configuring TypeScript before development:

- **TSConfig**: it's a configuration file containing all the compiler settings etc. (more about this later)

[[Types]]