// Interface User
interface User {
    id: number;
    name: string;
    email?: string;
    readonly isAdmin: boolean;
}

// create User object
const user1: User = {
    id: 1,
    name: "Alice",
    isAdmin: false
};
console.log(user1);

// Interface Admin extending User
interface Admin extends User {
    permissions: string[];
}
// create Admin object
const admin1: Admin = {
    id: 2,
    name: "Bob",
    email: "bob@gmail.com",
    isAdmin: true,
    permissions: ["read", "write", "delete"]
};
console.log(admin1);