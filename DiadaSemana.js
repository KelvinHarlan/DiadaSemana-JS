// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

function diaDaSemana(){
    if (dia === 1){
        console.log('Olá, hoje é "Domingo"')
    }

    else if (dia === 2){
        console.log('Olá, hoje é "Segunda-Feira"')
    }

    else if (dia === 3){
        console.log('Olá, hoje é "Terça-Feira"')
    }

    else if (dia === 4){
        console.log('Olá, hoje é "Quarta-Feira"')
    }

    else if (dia === 5){
        console.log('Olá, hoje é "Quinta-Feira"')
    }

    else if (dia === 6){
        console.log('Olá, hoje é "Sexta-Feira"')
    }

    else if (dia === 7){
        console.log('Olá, hoje é "Sábado"')
    }

    else{
        console.log('Dados inválidos')
    }
}

diaDaSemana(dia = 7)