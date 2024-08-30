const User = {
    name: "Gianluca",
    email: "coco.gian07@gmail.com",
    isActive: true
}

//function createUser({name: string, isPaid: boolean}) {}

//createUser({name: "Gianluca", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 50}
}


// type aliases
//type User = {
//    name: string;
//    email: string;
//    isActive: boolean
//}

//function createUser(user: User): User {
//    return {name: "", email: "", isActive: true} 
//}

//createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    credcardDetail?: number
}

let myUser: User = {
    _id: "1245",
    name: "gian",
    email: "email@gmail.com",
    isActive: false
}

// myUser._id = "asasap" Doesn't work because of read only

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetail = cardNumber & cardDate & {
    cvv: number
}


export {}