// // function change(data){
// //     return new Promise((resolve,reject)=>{
// //         let speed=Math.floor(Math.random()*10)+1
// //         if (speed>3){
// //             resolve("your internet connection is secure")
// //         }else{
// //             reject("check your internet connection ")
// //         }

// //     }
       
    
// // )}

// // change("vamshi").then(()=>{
// //     console.log("good")
// //     return change("hemesh")
// // })

// // .then(()=>{
// //     console.log("data2 added succesfully")
// //     return change("red")
// // })

// // .then(()=>{
// //     console.log("data3 added succesfully")
// //     return change("amul")

// // })




















// let h1=document.querySelector('h1')

// function changeCol(col,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=col;
//             resolve("color succesfully changed")
            
//         },delay)
  

//     })
// }


// changeCol("red",2000).then((result)=>{
//     console.log("color changed to red")
//     console.log(result)
//     return changeCol("blue",2000)

// })

// .then((result)=>{
//     console.log("color changed to blue")
//     console.log(result)
//     return changeCol("yellow",2000)
    
// })

// .then((result)=>{
//     console.log("color changed to yellow")
//     console.log(result)
//     return changeCol("green",2000)
    
// })
// .then((result)=>{
//     console.log("color changed to green")
//     console.log(result)
    
    
// })

// .catch((error)=>{
//     console.log(error)
// })











let h1=document.querySelector('h1')

// function colorChange(col,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=col
//             resolve("color changed")
//         },delay)

//     })
// }

// async function demo(result) {
//     await colorChange("red",2000)

//     await colorChange("orange",2000)
    
//     await colorChange("green",2000)
   
//     await colorChange("yellow",2000)
    
//     await colorChange("purple",2000)
//     colorChange("blue",2000)

// }


function colorChange(col,delay){
    return new Promise((resolve,reject)=>{
        setTimeout((()=>{
            h1.style.color=col
            resolve()

        },delay))
    })
}

async function de(result) {
    await colorChange("red",2000)
    
}