function addTwo(num: number): number {
    return num + 2;
    //return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}


addTwo(5);
getUpper("gianluca");

signUpUser("Gianluca", "email@gmail.com", false)
loginUser("gianluca", "coco.gian07@gmail.com")

// How to make a function return two or more specific data types?
function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK"
}


const getHello = (s: string):string => {
    return "";
}

const heros = ["thor", "spiderman", "iron man"];

heros.map((hero):string => {
    return `hero is ${hero}`;
})

function consoleError(errmsg:string): void {
    console.log(errmsg);
}



export {}