//variables
var x = 250;
var y = 250;
var mousex = 0;
var mousey = 0;
var redc1 = -50;
var redc2 = -50;
var bluec1 = -100;
var bluec2 = -100;
var random1;
var random2;
var random3;
var random4;


//setup
function setup() {
  createCanvas(500, 500);
  random1 = Math.floor(Math.random() * 10) + 1;
  random2 = Math.floor(Math.random() * 10) + 1;
  random3 = Math.floor(Math.random() * 10) + 1;
  random4 = Math.floor(Math.random() * 10) + 1;
}


//drawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
function draw()
{
  background(0,0,0);
  //creates player
  playercreate()
  //moves player wasd
  playermove()
  //mouseclick creates yellow circle
  mouseclicks()
  //creates red circle
  redcircle()
  //moves red circle
  redcirclemove()
  //creates blue circle
  bluecircle()
  //moves blue circle
  bluecirclemove()
  //creates exit square
  exitsquare()
  //creates exit square message
  exitmessage()
  
}
//drawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


//function to create player
function playercreate()
{
  //green circle
      fill(64, 255, 0);
      circle(x, y, 50);
}


//function to move player with keyboard
function playermove()
{
      
      //green circle moves wasd
      if (x >= 500 || x <=0) 
      {
        x = 250;
        y = 250;
      }
      if (keyIsDown(83)) 
      {
        y += 5;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 5;
      }
      if (y >= 500 || y <=0) 
      {
        x = 250;
        y = 250;
      }
          if (keyIsDown(68)) 
      {
        x += 5;
      } 
      else if (keyIsDown(65)) 
      {
        x -= 5;
      }
}


//function for clicking mouse makes yellow dot
function mouseclicks()
{
   //mouse makes yellow dot
      fill(255,255,0);
      ellipse(mousex, mousey, 25, 25);
  
}
//function for mouseclick
function mouseClicked()
{
  mousex = mouseX;
      mousey = mouseY;
}


//function for red circle
function redcircle()
{
  //red circle
      fill(255, 0, 0);
      circle(redc1,redc2,100);
     
}
//function to move red circle
function redcirclemove()
{
  redc1 += random1;
     redc2 += random2;
     if(redc1 >= 550 || redc2 >=550)
     {
       redc1=-50;
       redc2=-50;
     }
}
  
//function for blue circle
function bluecircle()
{
      //blue circle
                      fill(0, 0, 255);
      circle(bluec1,bluec2,200);
    
     
}
//function to move blue circle
function bluecirclemove()
{
   bluec1 += random3;
     bluec2 += random4;
     if(bluec1 >= 600 || bluec2 >=600)
     {
       bluec1=-100;
       bluec2=-100;
     }
}


//function for exit square
function exitsquare()
{
     fill(255,128,0);
      square(400,0,100);
      fill(0,0,0);
      text('exit',440,50);
}
//function for exit message
function exitmessage()
{
     if(x >= 400 && y <=100)
      {
        fill(255,255,255);
        text('you win boiii',250,250);
      }
}



