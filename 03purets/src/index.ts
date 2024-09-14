// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Milan"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }

class User {
    
    protected _courseCount = 1

    readonly city: string = "Milan"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ){
        // code here
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should not be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const gian = new User( "g@g.com", "Gianluca");
//gian.city = "Rome"