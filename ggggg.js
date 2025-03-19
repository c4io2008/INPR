array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
multiplos = []
for(let i = 0; i < array.length; i++){
    let num = array[i]
    if ( num % 3 == 0){
        array.splice(0,1)
        i--
    }
    console.log(array)
}