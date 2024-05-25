let gameSeq= [];
let userSeq= [];

let btns=["purple","yellow","red","green"];

let started= false;
let level= 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
if(started==false){
console.log("Game has started");
started=true;
levelUp();
}
});

function btngameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
  btn.classList.remove("flash");
  },250);
}

  function btnuserFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
    btn.classList.remove("userflash");
    },250);
  }


 
 function levelUp() {
  userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(randIdx);
    console.log(randbtn);
    console.log(randColor);
btngameFlash(randbtn);
    }

 function CheckAns(Idx) {
  console.log("curr level:",level);
 // let Idx=level-1;
  if (userSeq[Idx]==gameSeq[Idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{
h2.innerText=`Game Over!Your score was ${level} Press any key to start.`;
document.querySelector("body").style.backgroundColor="red";
setTimeout(function () {
  document.querySelector("body").style.backgroundColor="white";
}, 150);
reset();
  }
 }  

function btnPress() {
   console.log(this);
  let btn=this;
btnuserFlash(btn);
userColor=btn.getAttribute("id");
console.log("userColor");
userSeq.push(userColor);
CheckAns(userSeq.length-1);

    }

 let allBtns=document.querySelectorAll(".btn");
    
 for(btn of allBtns) {
      btn.addEventListener("click",btnPress);
 }
 function reset(){
  started==false;
  gameSeq=[];
  userSeq=[];
  level=0;

 }