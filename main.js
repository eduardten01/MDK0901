
//1
let books = document.querySelectorAll('.book');     

books[0].replaceWith(books[1],books[0]);
books[2].replaceWith(books[4],books[2]);
books[4].replaceWith(books[4],books[3]);
books[3].replaceWith(books[3],books[5]);




//2
document.body.style.backgroundImage="url('./image/you-dont-know-js.jpg')";
//3
books[4].querySelector('h2>a').textContent = 'Книга 3. this и Прототипы Объектов';
//4
let adv=document.querySelector('.adv');
adv.remove();   
//5
// 2 глава
let glava=books[0].querySelector('ul');
 glava.querySelectorAll('li')[3].replaceWith(glava.querySelectorAll('li')[3],glava.querySelectorAll('li')[2]);
glava.querySelectorAll('li')[4].replaceWith(glava.querySelectorAll('li')[5],glava.querySelectorAll('li')[4]);
glava.querySelectorAll('li')[6].replaceWith(glava.querySelectorAll('li')[6],glava.querySelectorAll('li')[3]);
glava.querySelectorAll('li')[5].replaceWith(glava.querySelectorAll('li')[5],glava.querySelectorAll('li')[3]);
glava.querySelectorAll('li')[4].replaceWith(glava.querySelectorAll('li')[4],glava.querySelectorAll('li')[3]);
glava.querySelectorAll('li')[8].replaceWith(glava.querySelectorAll('li')[8],glava.querySelectorAll('li')[4]);
glava.querySelectorAll('li')[7].replaceWith(glava.querySelectorAll('li')[7],glava.querySelectorAll('li')[4]);
glava.querySelectorAll('li')[6].replaceWith(glava.querySelectorAll('li')[6],glava.querySelectorAll('li')[4]);
glava.querySelectorAll('li')[5].replaceWith(glava.querySelectorAll('li')[5],glava.querySelectorAll('li')[4]);
glava.querySelectorAll('li')[8].replaceWith(glava.querySelectorAll('li')[8],glava.querySelectorAll('li')[5]);
glava.querySelectorAll('li')[7].replaceWith(glava.querySelectorAll('li')[7],glava.querySelectorAll('li')[5]);
glava.querySelectorAll('li')[6].replaceWith(glava.querySelectorAll('li')[6],glava.querySelectorAll('li')[5]);
glava.querySelectorAll('li')[8].replaceWith(glava.querySelectorAll('li')[8],glava.querySelectorAll('li')[7]);
glava.querySelectorAll('li')[9].replaceWith(glava.querySelectorAll('li')[9],glava.querySelectorAll('li')[8]);
//5 глава 
let glavaf=books[5].querySelector('ul');
glavaf.querySelectorAll('li')[9].replaceWith(glavaf.querySelectorAll('li')[9],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[8].replaceWith(glavaf.querySelectorAll('li')[8],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[7].replaceWith(glavaf.querySelectorAll('li')[7],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[6].replaceWith(glavaf.querySelectorAll('li')[6],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[5].replaceWith(glavaf.querySelectorAll('li')[5],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[4].replaceWith(glavaf.querySelectorAll('li')[4],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[3].replaceWith(glavaf.querySelectorAll('li')[3],glavaf.querySelectorAll('li')[2]);
glavaf.querySelectorAll('li')[8].replaceWith(glavaf.querySelectorAll('li')[8],glavaf.querySelectorAll('li')[3]);
glavaf.querySelectorAll('li')[7].replaceWith(glavaf.querySelectorAll('li')[7],glavaf.querySelectorAll('li')[3]);
glavaf.querySelectorAll('li')[6].replaceWith(glavaf.querySelectorAll('li')[6],glavaf.querySelectorAll('li')[3]);
glavaf.querySelectorAll('li')[5].replaceWith(glavaf.querySelectorAll('li')[5],glavaf.querySelectorAll('li')[3]);
glavaf.querySelectorAll('li')[4].replaceWith(glavaf.querySelectorAll('li')[4],glavaf.querySelectorAll('li')[3]);
glavaf.querySelectorAll('li')[9].replaceWith(glavaf.querySelectorAll('li')[9],glavaf.querySelectorAll('li')[4]);
glavaf.querySelectorAll('li')[8].replaceWith(glavaf.querySelectorAll('li')[8],glavaf.querySelectorAll('li')[4]);
glavaf.querySelectorAll('li')[7].replaceWith(glavaf.querySelectorAll('li')[7],glavaf.querySelectorAll('li')[4]);
glavaf.querySelectorAll('li')[6].replaceWith(glavaf.querySelectorAll('li')[6],glavaf.querySelectorAll('li')[4]);
glavaf.querySelectorAll('li')[5].replaceWith(glavaf.querySelectorAll('li')[5],glavaf.querySelectorAll('li')[4]);
glavaf.querySelectorAll('li')[9].replaceWith(glavaf.querySelectorAll('li')[9],glavaf.querySelectorAll('li')[5]);
glavaf.querySelectorAll('li')[8].replaceWith(glavaf.querySelectorAll('li')[8],glavaf.querySelectorAll('li')[5]);
glavaf.querySelectorAll('li')[7].replaceWith(glavaf.querySelectorAll('li')[7],glavaf.querySelectorAll('li')[5]);
glavaf.querySelectorAll('li')[6].replaceWith(glavaf.querySelectorAll('li')[6],glavaf.querySelectorAll('li')[5]);
glavaf.querySelectorAll('li')[5].replaceWith(glavaf.querySelectorAll('li')[5],glavaf.querySelectorAll('li')[4]);
glavaf.querySelectorAll('li')[7].replaceWith(glavaf.querySelectorAll('li')[7],glavaf.querySelectorAll('li')[6]);
glavaf.querySelectorAll('li')[8].replaceWith(glavaf.querySelectorAll('li')[8],glavaf.querySelectorAll('li')[7]);


console.log(glavaf.querySelectorAll('li')[9]);
//6
books[2].querySelector('ul').append(document.createElement('li').textContent='Глава 8: За пределами ES6');

