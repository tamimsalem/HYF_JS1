"use strict";

function main() {
    const imageJson = document.getElementById('imageJson');
    
    const loadBtn = document.getElementById('loadBtn');
    loadBtn.addEventListener('click', function() {

        var json = imageJson.value;
        var imageProperties = JSON.parse(json);

        console.log(imageProperties);
        //loadImage(imageProperties);
    });
}

function loadImage(guruProperties) {
    const image = window.document.getElementById('profileImage');
    image.src = guruProperties.imagePath;
    image.style.width = guruProperties.imageWidth;

    const guruName = window.document.getElementById('guruName');
    guruName.innerHTML = guruProperties.name;
}

window.addEventListener('load', main);
//"https://web.archive.org/web/20131108073412if_/https://blog.mozilla.org/press/files/2012/04/Thumbnail-Full_Eich_04.jpg";
//"https://upload.wikimedia.org/wikipedia/commons/2/24/Douglas_Crockford%2C_February_2013.jpg"