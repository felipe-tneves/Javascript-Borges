let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID = document.getElementById("formulario");
let elementoPorTag = document.getElementsByTagName("a");



//exibindo
console.log(elementosPorClass);
console.log(elementosPorClass[0]); //acessa a 1 posição do array
console.log(elementoPorID);
console.log(elementoPorTag);
console.log(elementoPorTag[0].textContent);


//modificando
elementoPorTag[0].textContent = "Vídeo engraçado"; //modifica o conteudo do elemento
elementoPorTag[0].style.color = "red";
elementoPorTag[0].style.fontSize = "30px";


//DESAFIOS
//1️⃣ Exiba o 2 segundo elemento(item) da variavel elementos✅
//2️⃣ Crie uma variavel que tenha o valor de um elemento buscado pelo nome da tag ✅
//3️⃣ Acesse a propriedade innerText da variavel elementoPorTag(é uma array, vao ter que acessar pela posicao do elemento) e exiba no console.log ✅
// Acesse a propriedade style.color e atribui (=) uma cor red em formato de string para a posição 0 da variavel elementoPorTag 