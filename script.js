
var timer = 60;
var hitrn = 0;
var score = 0;

function makebubble(){
    var clutter = "";

    for(var i = 1; i <=90; i++){
        var rn = Math.floor(Math.random()*10 +1)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;    
}

function runtimer(){
    var timeint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer
         } 
         else{
            clearInterval(timeint);
            document.querySelector("#pbtm").innerHTML = `<h1>game over -  high score is ${score}</h1>  `
        }
    }, 1000);
}


function getnewhit(){
   hitrn =  Math.floor(Math.random()*10 +1)
document.querySelector("#hitval").textContent = hitrn;

}


function increaseScore(){
score += 10;
document.querySelector("#scoreval").textContent = score
if(score>hiscoreval){
    hiscoreval = score;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
    hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
}
}


document.querySelector("#pbtm").addEventListener("click", function(details){
   var clickednum = (Number(details.target.textContent));
      if(clickednum === hitrn){
        increaseScore();
        getnewhit();
        makebubble();

      }
});



getnewhit();

runtimer();

makebubble();


let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "hiscore: " + hiscore;
}



