"use strict";

function main() {
    
    const colorSelect = document.getElementById('borderColor');
    const imageWidthInput = document.getElementById('imageWidth');
    const applyButton = document.getElementById('apply');

    const image = document.getElementById('profileImage');

    applyButton.addEventListener('click', function() {
        image.setAttribute('width', imageWidthInput.value);
        image.style.borderColor = colorSelect.value;
    }); //is this event enough
}

window.addEventListener('load', main);
