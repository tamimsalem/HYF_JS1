"use strict";

function hyfFilter(myArray, testerFunc) {
    
    let result = [];
    
    for(let i = 0; i < myArray.length; i ++){

        if(testerFunc(myArray[i])) {
            result.push(myArray[i]);
        }
    }

    return result;
}

function main() {
   
    const books = [
       {
            title: "The Alchemist",
            language: "Portoguese",
            isAuthorAlive: true
       },
       {
          title: "War and Peace",
          language: "Russian",
          isAuthorAlive: false
       },
       {
          title: "Harry Potter",
          language: "English",
          isAuthorAlive: true
       },
       {
         title: "Jane Eyre",
         language: "English",
         isAuthorAlive: false
       }
   ];

   const englishBookTitles = books
                          .filter(book => book.language === "English")
                          .map(book => book.title);

   //const englishBooks = books.filter(function(book) {return book.language === "English";});
   //const englishBookTitles =  englishBooks.map(function(book) {return book.title;});

   console.log(englishBookTitles);
}

function gethBooksWeLikeWithFilter(books) {

    //return books.filter(function(book) {
    //    return book.isAuthorAlive;
    //});

    return books.filter(book => book.isAuthorAlive);

}

function gethTransforedBooks(books) {

    return books.map(function(book) {
        return book.title;
    });

}

function getEnglishBooks(books) {
    let result = [];
    for(let i = 0; i < books.length; i ++){
        if(books[i].language === "English") {
            result.push(books[i]);
        }
    }

    return result;
}

window.addEventListener('load', main);