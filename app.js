let gameseq=[];
let userseq=[];
let btns=['yellow','purple','red','green'];
let started=false;
let level=0;
let hs=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log('game is started.');

        levelup();
    }
});

function btnFlash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
        btn.classList.remove("flash");
      },250);
}
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor = btns[randIdx]; // Get color instead of element
    gameseq.push(randColor);

   let randbtn = document.querySelector(`.${randColor}`);
   btnFlash(randbtn);
}

function checkans(indx){
    if(userseq[indx]===gameseq[indx]){
        if(userseq.length===gameseq.length){
          setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },1000);
        if(hs<level){
            hs=level;
        }
        h3.innerText=`Yours High score:${hs}`;
        resetGame();
    }
}   

function btnpress(){
    let btn=this;
    btnFlash(btn); 
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
function resetGame() {
        started = false;
        level = 0;
        gameseq = [];
        userseq = [];
    }
let allbtns=document.querySelectorAll(".btn");
for(b of allbtns){
    b.addEventListener("click",btnpress);
}





