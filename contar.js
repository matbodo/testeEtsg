const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});//Fiz essas linhas de comando para serem executadas no terminal, ja que não é possivel rodar com prompt no terminal do vscode

function contarLetra(text){
    const cont = (text.match(/a/gi) || []).length;
    return cont;
}

rl.question('Digite uma string: ', (string) => {
    const res = contarLetra(string);
    console.log(`A letra 'a' aparece ${res} vezes.`);
    rl.close();
})
