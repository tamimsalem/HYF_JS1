function prepareClosures() {

    let i = 0;

    let closures = [];

    for( ; i < 10; i ++) {
        //closures.push(createClosure(i));
        closures.push(function() {
            console.log('Value is: ' + i);
        });
    }

    function createClosure(xyz) { 

        return function() {

            console.log('Value is: ' + xyz);
        }
    }
    return closures;
}

const myClosures = prepareClosures();

for(let i = 0; i < myClosures.length; i++ ) {
    myClosures[i]();
}