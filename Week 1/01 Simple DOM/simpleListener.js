function main() {
    const bar = document.getElementById('{ElementId}');
    
    bar.addEventListener('{EventName}', function(e) {
        //whatever I want to be executed when event "{EventName}" happens
        //example: console.log();
        console.log('Event happened');
    });
}
