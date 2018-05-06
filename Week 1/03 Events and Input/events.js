"use strict";

function main() {
    
    const colorSelect = document.getElementById('borderColor');
    const imageWidthInput = document.getElementById('imageWidth');
    const applyButton = document.getElementById('apply');

    const image = document.getElementById('profileImage');

    applyButton.addEventListener('click', function() {
        console.log('button was clicked');
    });

    imageWidthInput.addEventListener('blur', function() {
        //setImage(imageWidthInput.value, colorSelect.value);
    });

    imageWidthInput.addEventListener('keyup', function(e) {
        if(e.keyCode === 13) {
            setImage(imageWidthInput.value, colorSelect.value);
        }
    });

    colorSelect.addEventListener('change', function() {
        setImage(imageWidthInput.value, colorSelect.value);
    });

    function setImage(width, color) {
        
        if(50 <= width && width <= 1000) {
            image.width = width;   
        }
        else {
            imageWidthInput.value = image.width;
        }

        image.style.borderColor = color;

        for(let i = 0; i < 5; i ++) { 
            console.log(i); 
        }
    }
}


window.addEventListener('load', main);
