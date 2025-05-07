{
    //
    //union types(or type)

    type FrontendDeveloper = "badDeveloper" | "juniorDEveloper"
    type FullstackDeveloper = "badDeveloper" | "expertDEveloper"
    type Developer = FrontendDeveloper | FullstackDeveloper

    const newDeveloper: FrontendDeveloper = 'juniorDEveloper'

    type User = {
        name: string;
        email?: String;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'AB+'
    }

    const user1: User = {
        name: 'atia',
        gender: "male",
        bloodGroup: 'O+'
    }


    // intersection type (common type)

    type FrontendDeveloper = {
        skills: string[];
        designation2: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper:FullstackDeveloper= {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    };
    //
}