'use strict';

function main() {
    
    let bookInfo = {
        the_alchemist: {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            language: 'Protoguese'
        },
        war_and_peace: {
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            language: 'Russian'
        },
        jayne_ayre: {
            title: 'Jayne Ayre',
            author: 'Charlotte Bronte',
            language: 'English'
        },
        harry_potter_and_the_prisoner_of_azkaban: {
            title: 'Harry Potter and the Prizoner of Azkaban',
            author: 'J.K Rowling',
            language: 'English'
        }
    };

    let bookImages = {
        the_alchemist: '1931_Jane_Eyre.jpg',
        war_and_peace: '1931_Jane_Eyre.jpg',
        jayne_ayre: '1931_Jane_Eyre.jpg',
        harry_potter_and_the_prisoner_of_azkaban: '1931_Jane_Eyre.jpg'
    };

    const ul = createUl(bookInfo, bookImages);

    document.body.appendChild(ul);

    console.log(JSON.stringify(bookInfo, null, 2));
}

function main2() {
    
    let addition = function(number1, number2) {
        return number1 + number2;
    }
    
    let subtraction = function(number1, number2) {
        return number1 - number2;
    }

    let multiplication = function(number1, number2) {
        return number1 * number2;
    }
    
    let division = function(number1, number2) {
        return number1 / number2;
    }

    const value1 = 15;
    const value2 = 30;

    calculate(addition, value1, value2);
    calculate(subtraction, value1, value2);
    calculate(multiplication, value1, value2);
    calculate(division, value1, value2);
}

function calculate(func, value1, value2) {

    if(value1 <= 0 || value2 <= 0) {
        return;
    }
    
    console.log('The result is: ' + func(value1, value2));
}

function createUl(bookTitles, bookImages) {
    const ul = document.createElement('ul');
    
    for (let i in bookTitles) {
         
        let book = bookTitles[i];

        let li = document.createElement('li');

        let header = document.createElement('h2');
        header.innerHTML = book.title;

        let authorP = document.createElement('p');
        authorP.innerHTML = book.author;

        let languageP = document.createElement('p');
        languageP.innerHTML = book.language;

        let image = document.createElement('img');
        image.src = getSource(i, bookImages);
        image.style.width = '200px';
        li.appendChild(header);
        li.appendChild(authorP);
        li.appendChild(languageP);
        li.appendChild(image);

        ul.appendChild(li);
    }
    return ul;
}

function getSource(bookId, bookImages) {
    return bookImages[bookId];
}

let x = function() {
    console.log('my anonymous function');
}

let y = x;

let z = y;

window.addEventListener('load', main);