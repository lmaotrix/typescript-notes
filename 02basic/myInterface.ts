interface User {
    readonly dbId: number,
    email: string, 
    userId: number,
    googleId?: string,
    startTrial: () => string,
    getCoupon(couponname: string, value: number): number 
}

interface User {
    githubToken: string
}

const gian: Admin = {role: "admin", dbId: 22, email: "h@h.com", userId: 2211, githubToken: "github",
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "gian10", off: 10) => {
        return 10
    }
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}