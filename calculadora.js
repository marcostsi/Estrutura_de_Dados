const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
        rl.question('Escolha a operação (+, -, *, /): ', (operacao) => {
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);

            let resultado;

            switch (operacao) {
                case '+':
                    resultado = numero1 + numero2;
                    break;
                case '-':
                    resultado = numero1 - numero2;
                    break;
                case '*':
                    resultado = numero1 * numero2;
                    break;
                case '/':
                    resultado = numero1 / numero2;
                    break;
                default:
                    console.log('Operação inválida!');
                    rl.close();
                    return;
            }

            console.log(`O resultado da operação é: ${resultado}`);
            rl.close();
        });
    });
});
