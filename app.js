// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo 


// Cenario 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenario 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação


var saldo = 1000

function saque(valor) {
//Verifica se o valor é maior que o saldo, caso seja, será exibido um alerta.. caso o cenario n caia no if o else permitirá que siga com a execução.
    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
    } else if (valor > 700){
        console.log('Valor do saque é superior ao máximo permitido')

    }
    else {
        saldo = saldo - valor 
    }
    
}

saque(701)
console.log('Seu saldo em conta é', 'R$' + saldo)
