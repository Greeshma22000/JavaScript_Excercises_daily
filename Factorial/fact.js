let n = 5;
let fact = 1;
for(let i = 1; i <= n; i++){
    fact = fact * i;
    console.log(fact);
}


// factorial recursion

function calFact(n){
    if(n === 0 || n === 1){
        return 1;
    } else{
        return n * calFact(n - 1);
    }
}

console.log(calFact(3))