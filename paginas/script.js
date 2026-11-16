let numero = prompt("Digite um número:"); // Pede um número ao usuário
numero = Number(numero); // Converte a entrada para número

if (numero > 0) {
    console.log("O número é positivo!");
} else if (numero < 0) {
    console.log("O número é negativo!");
} else {
    console.log("O número é zero!");
}
