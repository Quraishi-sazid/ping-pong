var ff=1;
function change()
{
  ballX+=ballXchanger;
  ballY+=ballYchanger;
  upperBarLeft+=upperBarSpeed;
  upperBarRight+=upperBarSpeed;
//  console.log(upperBarLeft);
  if (upperBarRight>canvasWidth)
  {
    upperBarRight=canvasWidth;
    upperBarLeft=canvasWidth-barWidth;
    var audio = new Audio('side_bar.wav');
    audio.play();
  }
  if (upperBarLeft<0)
  {
    upperBarLeft=0;
    upperBarRight=barWidth;
  }
  if (ballY<0 && ff==1 && !(ballX>=upperBarLeft && ballX<=upperBarRight))
  {
    zz="ball=";
    console.log(zz);
    console.log(ballX);
    ff=0;
  }
}

function checkBar()
{
  if (preX<0)
  return -1;
  if (preX>canvasWidth-barWidth)
  return -2;
  return 1;
}
