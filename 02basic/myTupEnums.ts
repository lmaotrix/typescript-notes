const user: [number, string, boolean] = [1, "gian", true]

let rgb: [number, number, number] = [255, 255, 255]

// type User = [number, string] throws error

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"

