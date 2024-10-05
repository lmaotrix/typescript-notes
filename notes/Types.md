**Reminder**
- Types in Typescript are always lowercase!!!
## What are some of the data types in typescript?

- Number (int and float are both defined as number, there is no specification)
- String
- Boolean
- Null
- Undefined
- Void
- Object
- Array
- Tuple
- ....
- Any (Allows all data types to be passed without throwing typeErrors)
- Never
- Unknown

### Type Inference:

- if you're directly assigning a value to a variable upon creation there is no need to specify its type. Only specify the type when the variable doesn't have a specific value assigned (ie. when working on a more generic function).

## The Any keyword:

- it is not good practice to use any just to avoid thinking of what type to assign to a variable
- if typescript can't find out what value is going to be given to a variable in the future, its data type will be set as 'any'  by default
- 'any' basically turns off typechecking for the variable
- make sure to use 'noImplicitAny' to flag any implicit 'any' as an error



[[variable declarations]]