let url="https://catfact.ninja/fact"

// fetch(url).then((res)=>{
//     console.log(res)
//     res.json().then((data)=>{
//         console.log(data)
//     })
// })

// async function data() {
//     try {
//     let res= await fetch(url)
//     let data=await res.json()
//     console.log(data)

//     let res1= await fetch(url)
//     let data1=await res1.json()
//     console.log(data1)
//     }catch(e){
//         console.log(e)
//     }
    
// }
async function test() {
    let res = await fetch(url)
    let data =await res.json()
    console.log(data.fact)
    
}