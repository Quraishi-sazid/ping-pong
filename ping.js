

var canvas=document.getElementById("ping");
var context=canvas.getContext('2d');
var scaleHeight=1;
var scaleWidth=1;
var ballradius=10;
var barWidth=200;
var barHeight=20;
var ballSpeed=20;
var space=1;
var ballXchanger=40;
var ballYchanger=-40;
var speedScale=1;
var maxSpeed=60;
var toBePositioned;
var journey;
var upperBarSpeed=0;
var timeNeeded;
context.scale(scaleWidth,scaleHeight);
var canvasWidth=canvas.width/scaleWidth;
var canvasHeight=canvas.height/scaleHeight;
var initialX;
var initialY;
var barController=(canvasWidth/2)-(barWidth/2);
var barleft=barController;
var barRight=(canvasWidth/2)+(barWidth/2);
var ballX=canvasWidth/2;
var ballY=canvasHeight-(barHeight+ballradius);
var upperBarMover=0;
var upperBarLeft=(canvasWidth/2)-(barWidth/2);
var upperBarRight=(canvasWidth/2)+(barWidth/2);
var barMiddle=barWidth/2;


function upperBarSpeedCalculator()
{
  if (toBePositioned>=upperBarLeft && toBePositioned<=upperBarRight)
  {
    upperBarSpeed=0;
  }
  else {
    var f;
    var total=(3.5/4)*(canvasWidth-barWidth);
    total=Math.round(total);
    if (toBePositioned>upperBarRight)
    {
      if (total>(toBePositioned-upperBarRight)+50)
      total=toBePositioned-upperBarRight+50;
      f="right";
    }
    if (toBePositioned<upperBarLeft)
    {
      if (total>(upperBarLeft- toBePositioned+50))
      total=upperBarLeft- toBePositioned+50;
      f="left";
    }
    var xx="total=";
    //console.log(xx);
  //  console.log(total);





    var t=(canvasHeight)-(2*barHeight);
    var t=t/ballYchanger;
    if (t<0)t=t*-1;
    //Math.abs(t);
    xx="time=";
  //  console.log(xx);
  //  console.log(t);
    var s=(total)/t;
    s=Math.round(s);
    if (f=="left")
    {
      upperBarSpeed=s*-1;
    }
    else {
        upperBarSpeed=s;
    }
  }

}

/*function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}*/

function calculateToBePositioned()
{
//  console.log(ballX);
  timeNeeded=((canvasHeight-2*barHeight)/Math.abs(ballYchanger));
  var distance=timeNeeded*ballXchanger;
  distance=Math.abs(distance);

   if (ballXchanger>0)
  {
    if (ballX+distance>canvasWidth)
    toBePositioned=canvasWidth-(distance-(canvasWidth-ballX));
    else
    toBePositioned=ballX+distance;
  }
  else
  {
    /*if (ballX-distance>=0)
  toBePositioned=ballX-distance;
  else {
    toBePositioned=ballX-dista
  }
  toBePositioned=Math.abs(toBePositioned);*/
//  var eee="distance=";
  //  console.log(eee);
  //  console.log(distance); eee="ballX=";
  //  console.log(eee);
//    console.log(ballX);
    if (ballX>distance)
      toBePositioned=ballX-distance;
    else
    toBePositioned=ballX-distance;
    toBePositioned=Math.abs(toBePositioned);
    var ttt="left";
//    console.log(ttt);
    eee="toBePositioned="
    //console.log(eee);
  //  console.log(toBePositioned);
  }


}

function checkBall()
{
if (ballY<0 || ballY>canvasHeight)
{
  return;
}

  if(ballX>canvasWidth-ballradius)
  {
    ballX=canvasWidth-ballradius;
    ballXchanger*=-1;
    var audio = new Audio('side_bar.wav');
    audio.play();
  }
  if (ballX<0)
  {
    ballX=0;
    ballXchanger*=-1;
    var audio = new Audio('side_bar.wav');
    audio.play();
  }
  if (ballX>=upperBarLeft && ballX<=upperBarRight && ballY<=barHeight)
  {
    ballYchanger*=-1;
    ballY=(barHeight+ballradius);
    var x=ballX-(upperBarLeft+upperBarRight)/2;
    x=Math.abs(x);
    console.log(x);
    x=x/barMiddle;

    //if (ballXchanger<0) x*=-1;
    if (ballXchanger<0) x*=-1;
    ballXchanger=maxSpeed*x;
    ballXchanger=Math.round(ballXchanger);

    zz="ball";
    //console.log(zz);
  //  console.log(ballX);

   ballXchanger=  Math.round(ballXchanger);


    upperBarSpeed=0;
    space=0;

  }

  if (ballX>=barleft && ballX<=barRight && ballY>=canvasHeight-barHeight)
  {
    ballYchanger*=-1;
    ballY=canvasHeight-(barHeight+ballradius);
    var x=ballX-(barleft+barRight)/2;
    if (x<0) x*=-1;console.log(x);
    x=x/barMiddle;
    if (ballXchanger<0) x*=-1;
  //  if (ballXchanger<0) x*=-1;
  ballXchanger=maxSpeed*x;
  ballXchanger=Math.round(ballXchanger);
    calculateToBePositioned();
    upperBarSpeedCalculator();
    var tt="toBePositioned="
    //console.log(tt);
  //  console.log(toBePositioned);
  //
  calculateToBePositioned();
  upperBarSpeedCalculator();
    if (toBePositioned>=upperBarLeft && toBePositioned<=upperBarRight)
    {
      journey="none";
      upperBarMover=0;
    }
    else if (toBePositioned<upperBarLeft)
    {
      journey="left";
      //upperBarMover=
    }
    else if (toBePositioned>upperBarRight)
    {
      journey="right";
    }

  }
}

function drawWhole()
{
  checkBall();
  context.beginPath();
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.closePath();
  context.fillStyle="#b0b5b7";
  context.fillRect(0,0,canvas.width,canvas.height);

  context.fillStyle="white";
  context.fillRect(upperBarLeft,0,barWidth,barHeight);

  context.fillStyle="white";
  context.fillRect(barController,canvasHeight-barHeight,barWidth,barHeight);
  context.beginPath();
  context.arc(ballX,ballY,ballradius,0,2*Math.PI,true);
  context.fillStyle="#073d03";
  context.closePath();
  context.fill();
  context.strokeStyle = "#073d03";
  context.stroke();
}
drawWhole();
/**/


var lasttime=0;
interval=60;
passTime=0;
function update(time=interval+1)
{
  deltatime=time-lasttime;
  passTime+=deltatime;
  lasttime=time;
  if (passTime>interval)
  {
    change();
    if (barController<0)
    barController=0;
    if (barController>canvasWidth-barWidth)
    barController=canvasWidth-barWidth;
    drawWhole();
    passTime=0;
  }
  requestAnimationFrame(update);
}









//control

var preX=0;
var preY=0;
var preBar=0;


function fun(ex)
{
  var speeder=40;
  var limit=1;
   preX=barleft;
   preY=barRight;
   preBar=barController;
  var x=ex.clientX;
  var y=ex.clientY;

  var z=x-initialX;
  if (z<0)
  z=z*(-1);
if (z>limit)
{
  if (x>initialX)
  {
      preBar+=speeder;
      preY+=speeder;
      preX+=speeder;
  }

  else if (x<initialX)
  {
    preBar-=speeder;
    preY-=speeder;
    preX-=speeder;
  }



var z=checkBar();

 if (z==-1){
  barleft=0;
  barRight=barWidth;
  barController=0;

}

else if (z==-2){
  barleft=canvasWidth-barWidth;
  barRight=canvasWidth;
  barController=canvasWidth-barWidth;
}

else if (z==1){
  barleft=preX;
  barRight=preY;
  barController=preBar;
//  console.log(barController);
}

if (ballY==canvasHeight-(barHeight+ballradius))
{

  if (space==1)
  {
    ballX=(barleft+barRight)/2;
    upperBarSpeedCalculator();
  //``  console.log(upperBarSpeed);
  }

  //console.log(toBePositioned);

}
/*if (barController<0)
barController=0;
if (barController>canvasWidth-barWidth)
barController=canvasWidth-barWidth;*/
drawWhole();
initialX=x;


}
//console.log(xx);


}

document.onmousemove=fun;

function getInitial(e)
{
  initialX=e.clientX;
//  console.log(initialX);
}
window.onclick=getInitial;


document.addEventListener("keydown",start);

function start()
{
  if (space==1 && event.keyCode==40)
  {
    calculateToBePositioned();
    upperBarSpeedCalculator();
    console.log(toBePositioned);
    update();

    space=0;
  }

}
