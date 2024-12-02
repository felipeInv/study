const numero = Number(window.prompt("Digite um número"));
const numeroRQ = numero ** 0.5;
const titulo = window.document.getElementById('numeroMain');
const conteudo = window.document.getElementById('content');

titulo.innerHTML = numero;

conteudo.innerHTML = `<p>Raiz quadrada ${numeroRQ}</p>`;
conteudo.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
conteudo.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
conteudo.innerHTML += `<p>Arredondado para cima: ${Math.floor(numero)}</p>`;
conteudo.innerHTML += `<p>Arredondado para baixo: ${Math.ceil(numero)}`;
conteudo.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}`;