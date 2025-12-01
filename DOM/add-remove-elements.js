let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML
let formularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");

novoParagrafo.textContent = "Paragrafo criado via JS"; //Poe um conteudo no p

secao[0].appendChild(novoParagrafo);

// document.body.appendChild(novoParagrafo);

//Remover a tag label 
formularioElemento.removeChild(labelElemento); //remove o elemento label do formulario
