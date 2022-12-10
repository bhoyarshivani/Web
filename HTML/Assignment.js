
var arr = []; 
function myFunction()
{
   
    var SName=document.getElementById('x1').value;
    var SRollNo=document.getElementById('x2').value;
    var SCourse=document.getElementById('x3').value;
    
    if(SName==""||SRollNo==""||SCourse=="")
            {
                alert("Please Pass all Value")
            }
   
    else{
        SRollNo=parseInt(SRollNo);
    
        var record =
        {
                Name:SName ,
                RollNo:SRollNo ,
                Course:SCourse  
        }

        arr[arr.length] = record
    }
}

function myFunction2()
{
    var x= ""
    
    for(val of arr){
   
    x=x + `
    <tr>
        <td>${val.Name}</td>
        <td>${val.RollNo}</td>
        <td>${val.Course}</td>
    </tr>
`       
}

document.getElementById("result").innerHTML = x
}

