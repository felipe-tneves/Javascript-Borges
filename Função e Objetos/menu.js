// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.

//sintaxe = escrita de código

let opcaoEscolhida = 0;

do {
    opcaoEscolhida = parseInt(prompt(`
        ==========👀MENU DE EXERCÍCIOS👀==========
        
        Digite um número das opções:
        0 - Sair
        1 - Login
        2 - IMC
        3 - Par ou Ímpar
        4 - Média do aluno
        5 - Número crescente, decrescente e aleatório

        =========================================
    `));

    switch (opcaoEscolhida) {
        case 0:
            alert("Volte sempre...👋");
            break;
        case 1:
            login();
            break;
        case 2:
            calculoIMC();
            break;
        case 3:
            verificarNumeroImparOuPar();
            break;
        case 4:
            calculoMediaAluno();
            break;
        case 5:
            verificarSequenciaNumeros();
            break;

        default:
            alert("Opção inválida! Escolha uma opção que exista no nosso sistema 😡");
            break;
    }

}
while (opcaoEscolhida != 0);

function login() {
    alert("Login realizado com sucesso");
}
function calculoIMC() {
    let pesoDigitado = parseFloat(prompt("Digite seu peso em quilograma: "));
    let alturaDigitado = parseFloat(prompt("Digite sua altura: "));

    let IMC = pesoDigitado / (alturaDigitado * alturaDigitado);

    if (IMC < 18.5) {
        alert("Abaixo do peso");
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Peso normal");
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        alert("Sobrepeso");
    }
    else if (IMC >= 30.0 && IMC <= 34.9) {
        alert("Obesidade grau 1");
    }
    else if (IMC >= 35.0 && IMC <= 39.9) {
        alert("Obesidade grau 2");
    }
    else {
        alert("Obesidade grau 3. Se cuide por favor, sua vida está em risco 🙏🥺");
    }

}
function verificarNumeroImparOuPar() {

}
function calculoMediaAluno() {

}
function verificarSequenciaNumeros() {

}

