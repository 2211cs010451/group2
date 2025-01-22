let p1=new Promise((resolve , reject)=>{})
console.log(p1)

let p2=new Promise((resolve , reject)=>{
    resolve("success")
})
console.log(p2)

let p3=new Promise((resolve , reject)=>{
    reject("failures")
})

p3
.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>console.log("final"))

console.log(p3)

function fetchUsers(){
    let response = fetch("https://jsonplaceholder.typicode.com/users")
    //console.log(response)
    response.then(res=>{
        ///console.log(res)
        //console.log(res.json())
        return res.json().then(data=>{
            console.log(data)
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers()