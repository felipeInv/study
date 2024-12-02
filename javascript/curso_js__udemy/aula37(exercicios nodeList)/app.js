const paragrafos = window.document.querySelector('.paragrafos');
const collectionP = paragrafos.querySelectorAll('p');
const fundoBody = getComputedStyle(window.document.body).backgroundColor;

for(let i of collectionP){
    i.style.backgroundColor = fundoBody
    i.style.color = 'white'
}