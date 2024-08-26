// // function one(){
// //     return 1;
// // }

// // function two(){
// //     return one()+one()
// // }

// // function three(){
// //     let a= two()+two()
// //     console.log(a)
// // }

// // three()

// // let h1=document.querySelector('h1')

// // function changeText(name,delay,nextName){
// //     setTimeout(()=>{
// //         h1.innerText=name
// //         nextName()

// //     },delay)
// // }
// // changeText("hemesh",1000,()=>{
// //     changeText("red",1000,()=>{
// //         changeText("sahithi",1000)
// //     })
// // })







// // function addDb(data,success,failure){

// //     let internetSpeed=Math.floor(Math.random()*10)+1
// //     if (internetSpeed>3){
// //         console.log("good internet connection ")
// //         success()

// //     }else{
// //         console.log("Bad internet connection ")
// //         failure()
// //     }

// // }

// // addDb("vamshi",()=>{
// //     console.log("data added succesfully")
// //     addDb("hemesh",()=>{
// //         console.log("data2 added succesfully")
// //     },()=>{
// //         console.log("weak connection data 2 was not added ")

// //     })
// // },()=>{
// //     console.log("weak connection")
// // })


// function addDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1
//         if (internetSpeed>=3){
//             resolve("data sent succesfully")
//         }else{
//             reject("data didnt sent succesfuly")
//         }
//     })
// }

// let request=addDb("hemesh")
// request.then(()=>{
//     console.log("resolved")
//     return addDb("vamshi")
// })
// .then(()=>{
//     console.log("resolved2")
// })
// .catch(()=>{
//     console.log("rejected")
// })




let a="praveen"
c=""
for (let i=0;i<a.length;i++){
    let b=a[i]

    if (c.indexOf(b)===-1){
        c=c+b
    }
  
    }

console.log(c)
  
let a1=4;

let arr=[1,2,3,4,5,6,7]
let arr2=[]
for (i=0;i<arr.length;i++){
    let b1=arr[i]                 
    // b1=[1]
    if (a1<b1){
        arr2.push(b1)
    }
}
console.log(arr2)

let country = ["Australia", "Germany", "United States of America"]
let length=[]
for (let i=0;i<country.length;i++){
    b2=country[i].length
    length.push(b2)

}
let r=Math.max(...length)
let z=length.indexOf(r);
console.log(country[z])

