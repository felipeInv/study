const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

let container = window.document.querySelector(".container");
let div = window.document.createElement('div')

for(let i = 0; i < elementos.length; i+=1){
    // const element = window.document.createElement(elementos[i].tag);
    // element.innerHTML = elementos[i].texto;
    // container.appendChild(element);

    const { tag, texto } = elementos[i];
    console.log(elementos[i]);
    // console.log(tag, texto)
    let elemento = window.document.createElement(tag);
    // let textNode = window.document.createTextNode(texto);

    elemento.innerText = texto;
    div.appendChild(elemento);

}

container.appendChild(div);