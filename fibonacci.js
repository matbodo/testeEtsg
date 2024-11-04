const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //Fiz essas linhas de comando para serem executadas no terminal, ja que não é possivel rodar com prompt no terminal do vscode

function fibonnacci(num) {
    let seqFib = [0, 1];
    while(seqFib[seqFib.length - 1] < num){
        seqFib.push(seqFib[seqFib.length - 1] + seqFib[seqFib.length - 2]);
    }
    return seqFib;
}

function isFibonacci(num){
    const seqFib = fibonnacci(num);
    return seqFib.includes(num) ? 
        `O numero ${num} esta na sequencia de fibonacci`:
        `O numero ${num} não está na sequencia de fibonacci`;
}

rl.question("Digite um numero: ", (num) => {
    const res = isFibonacci(parseInt(num));
    console.log(res);
    rl.close();
})