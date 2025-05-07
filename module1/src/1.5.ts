// Reference Type --> Object 

const user : {
    company: 'programming Hero'; //type -->literal types
    /*access modifier  another option for fixed value
    // readonly company: string;*/ 
    firstName:string;
    middleName?:string; //optional 
    lastName: string;
} = {
    company: 'programming Hero',
    firstName : "Atia",
    middleName:"Rahman", //Since this is a optional type so if we want to declare it which is fine , and if we dont want to which is also fine. if its have valu which will be string if not it will be undefine. 
    lastName : "Ruksana",
}

// when a value act as datatype its called literal types : for example
