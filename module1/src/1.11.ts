{
    // ternary operator (??) ||optional chaining || nullish coalescing operator
    //(?) as ternary operator
    const age: number = 18;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log("not adult");
    }

    // for convert ts file to js file practice purpose use "ts node dev"
    // for install "npm i ts-node-dev" 
    // for run a file have to run "ts-node-dev --respawn --transpile-only server.ts" this comment to terminal
    // ts-node-dev --respawn --transpile-only file-location


    const isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });

    //(?)nullish coalescing operator
    //this operator only use when u have to make decision on null or undefined variable
    // const isAuthenticated = null;
    // const isAuthenticated = undefined;
    const isAuthenticated = '';
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated? isAuthenticated:'Guest'
    console.log({result1},{result2});


    // (?) as optional chaining 
    type User = {
        name:string;
        address:{
            city:string;
            road:string;
            presentaddress:string;
            permanentAddress?:string
        }
    }
    const user:User = {
        name:'atia',
        address:{
            city:'ctg',
            road:"new road",
            presentaddress:'dhaka',
        }
    };
    const permanentAddress = user?.address?.permanentAddress??'No Permanent Address'
    console.log({permanentAddress});
}