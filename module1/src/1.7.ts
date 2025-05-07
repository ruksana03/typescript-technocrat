// spread operator (...ArrayName)

// spread operator for array 
const bros1: string[]= ["Mir","Firoz","Mizan"]
const bros2: string[]=["Tonmoy","Nahid","Rahat"]
bros1.push(...bros2)

// spread operator for object 
const mentors1 = {
    typescript: 'Mezba',
    redux:'Mir',
    dbms:'Mizan'
}
const mentors2 = {
    prisma: 'Firoz',
    next:'Tanmoy',
    cloud:'Nahid'
}
const mentorList = {
    ...mentors1,
    ...mentors2
}

// learn rest operator 
const greatFriend = (...friends: string[])=>{ //when array size is not fixed 
friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
};

