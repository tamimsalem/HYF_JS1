function createCarObject() {

    let color = "Red";
    let speed = 0;
    let model = "Volvo";
    let massInTons = 1.5;

    function newtonsLaw(mass, force) {
        return 500;
    }

    return {
        color: color,
        speed: speed,
        model: model,
        massInTons: massInTons,
        getColor: function() {
            return color;
        },
        setColor: function(value) {
            if(color !== 'Orange') {
                color = value;
            }
        },

        getModel: function() {
            return model;
        },
        setModel: function(value) {
            model = value;
        },


        getSpeed: function() {
            return speed;
        },

        
        bump: function(direction, force) {

            var acceleration = newtonsLaw(massInTons, force);

            if(direction === 'behind') {
                speed += acceleration;
            }
            else if(direction === 'front') {
                speed -= acceleration;
            }
        } 
    };
}

let myFancyCar = createCarObject();

console.log('Color: ' + myFancyCar.getColor());
console.log('Speed: ' + myFancyCar.getSpeed());
console.log('Model: ' + myFancyCar.getModel());

myFancyCar.bump('behind', 100000);

myFancyCar.speed = 200;
console.log(myFancyCar.setColor('Orange'));