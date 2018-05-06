"use strict";

function main() {
    const image = window.document.getElementById('profileImage');
    image.src = "https://web.archive.org/web/20131108073412if_/https://blog.mozilla.org/press/files/2012/04/Thumbnail-Full_Eich_04.jpg";
    image.style.width = "600px";
    
    //centralize display
    image.style.display = "block";
    image.style.marginLeft = "auto";
    image.style.marginRight = "auto";

    const title = document.createElement("h2");
    title.innerHTML = "The picture below is for Brendan Eich, the creator of JavaScript";
    title.style.fontFamily = "Tahoma";

    const container = document.getElementById('container');
    container.style.width = "100%";
    container.style.textAlign = "center";
    container.appendChild(title);
}

window.addEventListener('load', main);
