- Enums are used to restrict the User's choice.

**Example of Enums being used:**
```
enum SeatChoice {
	AISLE,
	MIDDLE,
	WINDOW,
	HALLWAY
}

const hcSeat = SeatChoice.AISLE
```
- *basically what this does is it restricts the options for the different types of seats in an international flight by using Enums.*

- Enums can also be used to keep track of statuses.
**Example: task status**
```
enum TaskStatus { 
	ToDo = "To Do",
	InProgress = "In Progress",
	Done = "Done",
	Blocked = "Blocked"
} 

function getTaskMessage(status: TaskStatus): string { 
	switch (status) { 
		case TaskStatus.ToDo: 
			return "Task is yet to be started.";
		case TaskStatus.InProgress: 
			return "Task is in progress."; 
		case TaskStatus.Done: 
			return "Task completed!"; 
		case TaskStatus.Blocked: 
			return "Task is blocked."; 
	} 
} 

let currentTaskStatus: TaskStatus = TaskStatus.InProgress; console.log(getTaskMessage(currentTaskStatus))
```
*What this does:*
- Enum: TaskStatus holds fixed task states.
- Function: getTaskMessage() returns messages based on current task status.
- Usage: Improves readability, type safety, and avoids magic strings.


- By default the values of the options set inside the enum are in ascending order.
**Default values of Enum options**
```
enum SeatChoice {
	AISLE, // 0
	MIDDLE, // 1
	WINDOW, // 2
	HALLWAY // 3
	...
}
```


- For the sake of other developers we shouldn't just use enum alone, but we should type 'const enum ...' because of the way it is then compiled to javascript.
**Example**
```
const num SeatChoice {
	AISLE, // 0
	MIDDLE, // 1
	WINDOW, // 2
	HALLWAY // 3
	...
}

const hcSeat = SeatChoice.AISLE
```
*It is important to make sure that the code that is compiled to javascript is clean and readable.*

[[Coding/languages/Typescript/Interfaces]]