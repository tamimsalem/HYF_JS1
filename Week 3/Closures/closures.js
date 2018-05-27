let name = "Tom";

function main() {

    //const button = document.getElementById("btnShow");
    
    var func = function () {
        console.log('1 Func: This JS class is provided by: ' + name);
    };
    
    func();

    name = "Jerry";
    
    return func;
}

console.log('3 Global myFunction before main: ' + name);

const myFunction = main();

console.log('4 Global myFunction after main: ' + name);

myFunction();

function change(y) {
    y = 10;
}

let x = 5;

change(x);

console.log(x);

//window.addEventListener('load', main);
