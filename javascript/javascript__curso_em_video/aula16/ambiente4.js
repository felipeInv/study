var res = 1
function fatorial(nf){
    for(c=1; c<=nf; c++){
        res = res*c
    }
    return res
}
console.log(fatorial(5))