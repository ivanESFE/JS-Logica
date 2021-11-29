let numero = prompt('Introdueix el numero')

if (numero % 3 ==0) {
    console.log('El numero ' + numero + ' és divisible de 3' )
}
else if(numero % 7==0){
    console.log('El numero ' + numero + ' és divisible de 7' )
}
else{
    console.log('El numero ' + numero + ' no es divisible de 3 i 7' )
}