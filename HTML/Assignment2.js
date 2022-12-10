
var result;
function myFunction()
{
   
    var type =document.getElementById('x3').value;
    var people=document.getElementById('x1').value;
    var days=document.getElementById('x2').value;


    
    
switch(type){

case "Economy":
    result = people*days*500;
    break;
case "Business":
    if(days>3)
    {
        result=(people*days*1000)-(people*100);
    }
    else{
        result=(people*days*1000);

    }
case "Delux":
    if(days>5)
    {
        result =   (people*days*2000)-(people*250);
    }
    default:
    
        break;
      
}

document.getElementById('result').innerHTML = 'Bill =  &#8377;' +result;




}