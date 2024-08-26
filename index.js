let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector('h2')
// let btn=document.querySelector('.btn')
let btn_array=['yellow','blue','green','red']
let highest=0


document.addEventListener("keypress",function(event){
    if (started==false){
        console.log("game started");
        started=true;
    }

    levelUp()

})


function colorChange(btn){
    btn.classList.add("white")
    setTimeout(function(){
        btn.classList.remove("white")
    },500)
}

function checkAns(index){
    // let index=level-1
    if (userSeq[index]===gameSeq[index]){
        if (userSeq.length===gameSeq.length){
           setTimeout( levelUp,1000)
           highest=Math.max(highest,level)
           console.log(highest)
        }
    }else{
         h2.innerText=`Level failed pls try again score was ${level}`
         document.querySelector('body').style.backgroundColor='red'
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white'
         },200)
         reset()
        
    }

}

function levelUp(){
    userSeq=[]
    level++;
    h2.innerText=`Level ${level}`
    let btn_random=Math.floor(Math.random()*3);
    let rand_color=btn_array[btn_random]
    
    gameSeq.push(rand_color)
    let rand_button=document.querySelector(`.${rand_color}`)
   
    colorChange(rand_button);



}



function buttonClicked(){
    let button=this;
    let color=button.getAttribute('id')
    userSeq.push(color)
    console.log(userSeq)
    
    colorChange(button)
    checkAns(userSeq.length-1)

}
let btns=document.querySelectorAll('.btn')

for (btn of btns){
    btn.addEventListener('click',buttonClicked)
}

function reset(){
    started=false;
    userSeq=[];
    level=0;
    gameSeq=[];
    
}