(function(){ 
    
    function printObjects(obj) {
    
        for(let prop in obj) {
            if(typeof obj[prop] === "object")
            {
                printObjects(obj[prop]);
            }
            else
            {
                console.log('Property: ' + prop + '\tValue: ' + obj[prop]);
            }
        }
    }

    const myObj = {
        name: "Tamim",
        age: 36,
        pet: "Paco",
        skills: ["cook", "code"],
        Father: {
            name: "John",
            age: 70,
            pet: "Asha",
            Father: {
                name: "Mohammad",
                age: 95,
                pet: "Unknown"
            }
        }
    };

    //printObjects(myObj);

    function advertisement(cars) {
        
        let thingsWeService = '';

        let index = 0;

        for(let i = 0; i < cars.length; i++ ) {
            
            let car = cars[i];
            let pluralForm = car + 's';

            if (i == cars.length - 1) {
                thingsWeService += 'and ' + pluralForm;
            }
            else 
            {
                thingsWeService += pluralForm + ', ';
            }
        }

        console.log('Welcome to Amazing Joe\'s Garage, we service ' + thingsWeService);
    }

    function mansourAd() {

        let vehicleType = ["car", "motorbike", "caravan", "bike", "planes"];
        for (let i = 0; i < vehicleType.length; i++) {
            vehicleType[i] = vehicleType[i] + 's';
        }
        let text = vehicleType.join(", ");
        let advertisement = text.replace("caravans,", "caravans and");

        console.log("Amazing Joe's Garage, we service" + " " + advertisement + ".");
    }

    advertisement(['car', 'carvan', 'motorbike', 'plane']);

    const x = {};

    const teacherArray = [{
        firstName: "Philip", 
        lastName: "Beau",
        languages: ["HTML", "CSS"]
    }, 
    {
        firstName: "Unmesh", 
        lastName: "Joshi",
        languages: ["Git", "CLI"]
    }, 
    {
        firstName: "Jim", 
        lastName: "Cramer",
        languages: ["JavaScript"]
    }];
})();
