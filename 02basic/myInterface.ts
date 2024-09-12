interface User {
    readonly dbId: number,
    email: string, 
    userId: number,
    googleId?: string,
    startTrial: () => string,
    getCoupon(couponname: string, value: number): number 
}

const gian: User = {dbId: 22, email: "h@h.com", userId: 2211,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "gian10", off: 10) => {
        return 10
    }
}