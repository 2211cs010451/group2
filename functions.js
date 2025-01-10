
        /*function demo(){
            console.log("function")
        }
        demo()
        demo()
        demo()

        

        function test1(a,b){
         return a+b;
        }
        console.log(test1(4,7));

        let x=(a,b) => {return a+b};
        console.log(x(5,5));

        let y=(a,b)=>a+b;
        console.log(y(83,908));*/


        function hof(A){
            return A
        }

        let x = hof(function(){return "callback function"})
        console.log(x);

        let users=["A","B","C"]
        console.log(users)
        users.map(function(user){console.log(user)})

        let y=(a,b) => a+b
        console.log(y(7873,938))

        var a=34;
        let b=32
        function k(){
            var user="reddy"
            let company="googulu"
            const sal=353
            console.log(user)
            console.log(company)
            console.log(sal)
            console.log(a,b)

        }
        k()

        //Higher Order function
function hof(a){
    return a();
}
let k = hof(function(){return "Callback function"});
console.log(k);



// let x =hof(function(){return"Call Back function"});
// console.log(x());

// //Example 
//arrow function
// let user = ["Manu", "Shaik", "Harish", "Chaithu"];
// console.log(user);
// user.map((user)=>{
//     console.log(user);
// })

        