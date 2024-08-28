// Button Inputs

const bt1=document.getElementById("b1");
const bt2=document.getElementById("b2");
const bt3=document.getElementById("b3");
const op=document.getElementById("s");
const r=document.getElementById("res");
const yo=document.getElementById("csi");
const co=document.getElementById("ysi");
const mut=document.getElementById("m");
var wi=new Audio("win.mp3");
var dr=new Audio("draw.mp3");
var ls=new Audio("lose.mp3");
var bg=new Audio("bgtune.mp3");
//  Buttons call
bt1.addEventListener("click",func1);
bt2.addEventListener("click",func2);
bt3.addEventListener("click",func3);
bg.play();
bg.volume = 0.7;
// Conditions
mut.addEventListener("click",mute);
function mute(){
    bg.pause();
}
var y=0;
var c=0;
function func1(){
    let g=Math.floor(Math.random()*3)+1;
    if(g==1){
        op.innerHTML="Match Draw";
        r.style.backgroundImage="radial-gradient(white,grey)";
        dr.play();
    }
    if(g==2){
        op.innerHTML="You Lose";
        r.style.backgroundImage="radial-gradient(white,red)";
        c=c+1;
        ls.play();
    }
    if(g==3){
        op.innerHTML="You Win";
        r.style.backgroundImage="radial-gradient(white,rgb(0, 255, 81))";
        y=y+1;
        wi.play();
    }
    yo.innerHTML=y;
    co.innerHTML=c;
}
function func2(){
    let g=Math.floor(Math.random()*3)+1;
    if(g==1){
        op.innerHTML="You Win";
        r.style.backgroundImage="radial-gradient(white,rgb(0, 255, 81))";
        y=y+1;
        wi.play();
    }
    if(g==2){
        op.innerHTML="Match Draw";
        r.style.backgroundImage="radial-gradient(white,grey)";
        dr.play();
    }
    if(g==3){
        op.innerHTML="You Lose";
        r.style.backgroundImage="radial-gradient(white,red)";
        c=c+1;
        ls.play();
    }
    console.log("Computer = ",c);
    console.log("Your Score =",y);
    yo.innerText=y;
    co.innerHTML=c;
}
function func3(){
    let g=Math.floor(Math.random()*3)+1;
    if(g==1){
        op.innerHTML="You Lose";
        r.style.backgroundImage="radial-gradient(white,red)";
        c=c+1;
        ls.play();
    }
    if(g==2){
        op.innerHTML="You Win";
        r.style.backgroundImage="radial-gradient(white,rgb(0, 255, 81))";
        y=y+1;
        wi.play();
    }
    if(g==3){
        op.innerHTML="Match Draw";
        r.style.backgroundImage="radial-gradient(white,grey)";
        dr.play();
    }
    console.log("Computer = ",c);
    console.log("Your Score =",y);
    yo.innerHTML=y;
    co.innerHTML=c;
}
