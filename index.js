// Declaração de variáveis:
let nome = "Saint Seya" //Variável com o nome do herói.
let XP = 4500 //Variável com o XP do herói.
let nivelHeroi = "" //Variável em branco para o nível do herói.

// Estrutura de decisões:
if (XP <= 1000) {   //Feita a verificação do poder do herói se é abaixo de 1.000.
    nivelHeroi = "Ferro"
} else if (XP >= 1001 && XP <= 2000) {  //Feita a verificação do XP do herói se é entre 1.001 e 2.000.
    nivelHeroi = "Bronze"
} else if (XP >= 2001 && XP <= 5000) {  //Feita a verificação do XP do herói se é entre 2.001 e 5.000.
    nivelHeroi = "Prata"
} else if (XP >= 5001 && XP <= 6000) {  //Feita a verificação do XP do herói se é entre 5.001 e 6.000.
    nivelHeroi = "Ouro"
} else if (XP >= 6001 && XP <= 7000) {  //Feita a verificação do XP do herói se é entre 6.001 e 7.000.
    nivelHeroi = "Platina"
} else if (XP >= 7001 && XP <= 8000) {  //Feita a verificação do XP do herói se é entre 7.001 e 8.000.
    nivelHeroi = "Diamante" //Adicionei esse nível para ficar mais bonito...
} else if (XP >= 8001 && XP <= 9000) {  //Feita a verificação do XP do herói se é entre 8.001 e 9.000.
    nivelHeroi = "Ascendente"
} else if (XP >= 9001 && XP <= 10000) { //Feita a verificação do XP do herói se é entre 9.001 e 10.000.
    nivelHeroi = "Imortal"
} else { //Aqui para a verificação restante, aonde o poder não foi verdadeiro em nenhuma das condições anteriores. Pela lógica aqui o herói terá mais de 10.000 de XP.
    nivelHeroi = "Radiante"
}

// Por fim, o algortimo exibe na tela o nome, xp e o nível em que o herói está.
console.log("O Herói de nome " + nome + " com XP " + XP + " está no nível " + nivelHeroi + ".")