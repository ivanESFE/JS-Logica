var nom = "hol3 c1m2 t5al"
var num = nom.replace(/[^0-9]/gi, "")
let sum =0

for (let i = 0; i < num.length; i++) {
    sum += Number(num.charAt(i))
}
console.log(sum)