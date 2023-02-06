var marks = [35,38,42,45,43,34,46,41,48,32];
var sum = 0;
var average;

for(var i=0;i < marks.length;i++){

  if(marks[i] % 2==0){
    sum=sum + marks[i];
   average=sum/marks.length;
  }
  }



console.log(average);

function setup() 
{
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

