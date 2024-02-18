let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];


let h2=document.querySelector("h2");
document.addEventListener('keypress', function(){
    if(started==false)
    {
        console.log('game started');
        started=true;

        levelup();

    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);
}


function levelup(){
    userseq=[];
    level++; 
    h2.innerText=`level ${level}`;
    let randInx=Math.floor(Math.random()*3);
    let rancolor=btns[randInx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    gameflash(ranbtn);

}
function checkans(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
        }

    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b><br>press any key to start`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 100);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let albtns=document.querySelectorAll(".btn");
for(btn of albtns){
    btn.addEventListener('click',btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}