{
    //type Alias
    //type Alias for object

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string,
    }
    const student1: Student = {
        name: "Atia",
        age: 50,
        gender: "Female",
        contactNo: "0170000000",
        address: "ctg",
    };
    const student2: Student = {
        name: "Roksana",
        age: 40,
        gender: "Female",
        address: "dhk",
    };
    var student3: Student = {
        name: "Mir",
        age: 40,
        gender: "male",
        address: "dhk",
    };

    //type alias for random variable

    type UserName = string
    type IsAdmin = boolean

    const userName: UserName = "Persian";
    const isAdmin: IsAdmin = true;

    // type Alias for function 
    type Add = (num1:number, num2:number) =>number;
    // const add:Add = function (num1, num2) { return num1 + num2; };
    const add:Add =  (num1, num2) =>  num1 + num2; ;
    //
}