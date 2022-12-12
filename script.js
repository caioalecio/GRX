let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arrayPares

function retornaApenasPares(array) {


 let i=1;
    var arrayPares=[]

    while(i <= 11){
        
        if( array[i] % 2 == 0){

            arrayPares.push(array[i]) 
         }
     i++
    }
    return arrayPares;

}
arrayPares = retornaApenasPares(array)

console.log(arrayPares)







