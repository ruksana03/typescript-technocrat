// destructuring  
// object destructuring & array destructuring 

// destructuring
const user = {
    id: 345,
    name: {
        firstName: "Atia",
        middleName: "Rahman",
        lastName: "Ruksana",
    },
    contactNo: "0170000000",
    address: "Bangladesh",
};
const {
    contactNo,
    name: { middleName };
} = user;

// array destructuring
var myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
const [, , bestFriend, ...rest] = myFriends;