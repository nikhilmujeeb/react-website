//sum of no

let num1=5
let num2=3
let sum=num1+num2;
console.log("The sum of the two numbers is: " + sum);

//area of rectangle

let l=10
let b=5
let area=l*b;
console.log("area=" +area);

//eligible for vote

let age
age=window.prompt("enter age")
if(afe>+18)
{
    console.log("eligible for vote");
}
else
{
    console.log("not eligible");
}

//user's grade

let grade=90
if(grade>=60)
{
    console.log("Exam passed");
}
else
{
    console.log("Exam falied");
}

//checks if no is positive,negative or zero

let n=34
if(n>0)
{
    console.log("the no is positive");
}
else if(n<0)
{
    console.log("the no is negative");
}
else
{
    console.log("the no is zero");
}

//check if child,teenager,adult,senior

let n=21;
switch(true)
{
    case n<13:
        console.log("use is a child");
        break;
    case n<20:
        console.log("use is a teenager");
        break;
    case n<60:
        console.log("use is a adult");
        break;
    default:
        console.log("use is a senior");                    
}

//square of each no in array

ar=[1,2,3,4,5,6]
let len=ar.length;
let i=0;
for(i=0;i<=len;i++)
{
    console.log(ar[i]*ar[i]);
}

//sun of odd no in n

limit=100;
let j=0;
sum=0;
for(j=0;j<=limit;j++)
{
    if(j%2!=0)
    {
        sum=sum+j;
    }
}
console.log("sum="+sum);
