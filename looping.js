
    
    for(let i=1;i<=50;i++){
        if(i%2==0){
            console.log(i+"is even number")
        }
        else{
            console.log(i+"is odd number")
        }
    }
    function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const num = 5; 
console.log(`Factorial of ${num} is ${factorial(num)}`);

let i=5
while(i<=10){
    i++
    console.log(i)
    
}
let a=5
do{
    a++
}
while(a<=5){
console.log(a)
}



