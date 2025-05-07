{
    // nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching");
        } else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);

    //unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}ms^-1`);
        }else if (typeof value === 'string') {
            // const valueInNumber = value.split(' ')
            const [result,unit] = value.split(' ');
            // console.log(valueInNumber);
            // console.log(result);
            // const convertedSpeed = (result * 1000) / 3600;
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed}ms^-1`);
        }else{
            console.log("wrong input");
        }
    };
    // getSpeedInMeterPerSecond(`1000 kmh^-1`);
    getSpeedInMeterPerSecond(null);


//never type (arrow function for throw error)

const throwError = (msg: string) : never=>{ // this function never gonna return any value it will just throw an error thats why this will be a never type
    throw new Error (msg);
}
throwError ('Oops')


    //
}