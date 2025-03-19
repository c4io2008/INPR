const prompt = require('prompt-sync')()

array = []
array.push('Caio', 'Nicole', 'Luisa', 'Ferreira', 'Milla', 'Eick', 'Gabriel', 'Oreia', 'Jackson')
for (; ;) {
    let numero = parseInt(prompt('Digite qualquer numero para o proximo e 0 para parar:  '))
    if (numero == 0) {
        break
    }
    console.log('Proximo: ', array[0])
    console.log('Tem',array.length,'na fila')
    array.shift()
}
