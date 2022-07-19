/* append::
 const body = document.body;
body.append('Hello World', 'Bye');
 */

/* 
//apppendChild:: 
const body = document.body;
const div = document.createElement('div');
div.innerText = 'Hello world';
//div.textContent = 'hello 2';  
body.appendChild(div);
*/

/* 
//modifiying Element Text 
const body = document.body;
const div = document.createElement('div');
div.innerText = 'Hello world';
div.textContent = '<h2><strong>hello 2</h2></strong>';
body.append(div);
*/

/* 
const div = document.querySelector('div');
console.log(div.textContent);
console.log(div.innerText);
 */

/*//to modifiying Element Text::  
//only using innerHTML we can render JS element into html
const body = document.body;
const div = document.createElement('div');
div.innerHTML = '<h2> <i><strong>hello 2</h2></strong>';
body.append(div);
*/

/* 
//alternative and secure way of innerText use approch in JS
// for below syntax :: example:-  <strong>
//div.innerHTML = '<h2> <i><strong>hello 2</h2></strong>';

const body = document.body;
const div = document.createElement('div');
const strong = document.createElement('strong');
strong.innerText = ' Hello World 2 ';
div.append(strong);
body.append(div);
 */

/* //to Removing Elements 

const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

// spanBye.remove();   //to remove spanHi from div element
//div.append(spanBye);//to add  spanHi back again
// spanHi.remove();  // to remove spanHi element only
// div.remove( ); //to remove div element only
div.removeChild(spanBye); // to remove spanBye childElement only
*/

/* to modifying Element attributes
const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//console.log(spanHi.getAttribute('title'));//display title attribute
//console.log(spanHi.id); //display id attribute of spanHi
//console.log(div.setAttribute('title', 'yagya')); //to set spanHi attribute title as yagya
//div.setAttribute('title', 'yagya');
//div.id = 'adhikari yagya'; //to set div element id-attribute as yagya adhiakari

 // remove attribute from spanHi 
spanHi.removeAttribute('title');
spanHi.removeAttribute('id');
 */

/* to Modifying Data Attributes 
const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//console.log(spanHi.dataset);
//console.log(spanHi.dataset.offSchool);
//console.log(spanHi.dataset.longerName);

//this below things creates data attribute
//div.dataset.newName = 'chitwan nepal';
//spanBye.dataset.bothSchoolByeBye = 'bye bye tag is here...';

*/

/* to modification of classes 
const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

//div.classList.add('new-class'); // to add new classAttribute into div element
//spanHi.classList.add('name'); //to add name calss in sapanHi
//spanBye.classList.add('byeee'); //to add byee class into spanBye

//remove class
//spanHi.classList.remove('hi2');//to remove class name hi2 from class

//toggle class
//spanHi.classList.toggle('hi3');
//spanHi.classList.toggle('hi3-na');

//toggle class add or,remove on boolean
//spanHi.classList.toggle('hi3', true);
//spanHi.classList.toggle('hi3', false);
*/

/* to Modifying Element style */
const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');

spanHi.style.color = 'red';
spanHi.style.backgroundColor = 'blue';

div.style.border = '1px solid black';
div.style.height = '20vh';
div.style.backgroundColor = 'green';
