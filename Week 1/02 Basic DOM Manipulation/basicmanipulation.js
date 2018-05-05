"use strict";

function main() {
    const image = document.getElementById('profileImage');
    image.src = "https://web.archive.org/web/20131108073412if_/https://blog.mozilla.org/press/files/2012/04/Thumbnail-Full_Eich_04.jpg";
    
    const container = document.getElementById('container');
    container.innerHTML = "The picture below is for Brendan Eich, the creator of JavaScript"; 

    //is the title clear?
    //is the image the correct size?
}

window.addEventListener('load', main);
