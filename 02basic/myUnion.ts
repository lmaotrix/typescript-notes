let score: number | string = 33

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let gian: User | Admin = {name: "Gian", id: 334}

gian = {username: "lmaotrix", id: 334}

// function getbId(id: number | string) {
//     // making some api calls
//     console.log(`Db id is ${id}`);
    
// }
// getbId(3)
// getbId("3") 

function getbId(id: number | string) {
   if (typeof id === "string") {
    id.toUpperCase()
   }
    
}

// union types x arrays
const data: (string | number)[] = [1,2,3,"4"]  