// Generic function
function identity<Type>(arg: Type): Type {
    return arg;
}
let output1 = identity<string>("Generic Function");
let output2 = identity<number>(123);
console.log(output1);
console.log(output2);

// Generic function with Type[]
function getFirst<Type>(arr: Type[]): Type {
    return (arr[0] as Type);
}
let firstString = getFirst<string>(["apple", "banana", "cherry"]);
console.log(firstString); // Output: "apple"
let firstNumber = getFirst<number>([1, 2, 3]);
console.log(firstNumber); // Output: 1

// Generic class
class Repository<Type> {
    // private attribute
    private items: Type[] = [];
    // constructor
    constructor(items: Type[]) {
        this.items = items;
    }
    // methods
    // add, remove, getAll
    add(x: Type): void {
        this.items.push(x);
    }
    remove(x: Type): void {
        this.items = this.items.filter(item => item !== x);
    }
    getAll(): Type[] {
        return this.items;
    }    
}
 
let myGenericRepository = new Repository<number>([1, 2, 3]);
myGenericRepository.add(4);
console.log(myGenericRepository.getAll()); // Output: [1, 2, 3, 4]
myGenericRepository.remove(2);
console.log(myGenericRepository.getAll()); // Output: [1, 3, 4]

// Generic interface
interface ApiResponse<Type> {
    data: Type;
    error?: string;
}
let response1: ApiResponse<string> = {
    data: "Success"
};
let response2: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "Item 1" },
    error: "Not Found"
};
console.log(response1);
console.log(response2);
