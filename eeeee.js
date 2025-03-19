array = [5, 8, 12, 3, 7, 15, 20, 6]
pares = []
impares = []
for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if ( num % 2 == 0) {
        pares.push(num)
    } else{
        impares.push(num)
    }
} 
console.log(pares)
console.log(impares)
