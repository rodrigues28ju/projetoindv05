import readlineSync from 'readline-Sync';
import chalk from 'chalk';

const  propriedades = [];

let entrada = '';

console.log(chalk.cyan.underline.bold('\n' + 'Digite as propriedades CSS que você deseja ou digite "Sair" para finalizar.'));

while (entrada.toLowerCase() !== 'sair'){
    entrada = readlineSync.question(chalk.italic.overline.greenBright('\n' + 'Digite a propriedade desejada: '));
    if(entrada.toLowerCase() !=='sair'){
        propriedades.push(entrada);
    }
}

console.log(chalk.blue.underline.bold( '\n' + 'Lista das Propriedades que foram digitadas CSS!'));

console.log('\n'+ chalk.italic.overline.magentaBright(propriedades.sort().join('\n')));