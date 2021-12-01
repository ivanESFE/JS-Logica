
function ordenar(a,b,c){
    if (a>=b && b>=c) {
        console.log(a + ' ' + b + ' ' + c)
    }
    else if (a>=c && c>=b) {
        console.log(a + ' ' + c + ' ' + b)
    }
    else if(b>=a && a>=c){
        console.log(b + ' ' + a + ' ' + c)
    }
    else if(b>=c && c>=a){
        console.log(b + ' ' + c + ' ' + a)
    }
    else if (c>=a && a>=b) {
        console.log(c + ' ' + a + ' ' + b)
    }
    else{
        console.log(c + ' ' + b + ' ' + a)
    }
        
    
}
console.log(ordenar(9,6,7))