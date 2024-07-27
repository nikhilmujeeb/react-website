//1.

function calcfact(n){
    if(n<0){
        console.log("its a negative number");

    }
    else if(n==0){
        console.log("its a zero");
    }
    else{
            let fact=1;
            for(let i=1;i<=n;i++){
                fact=fact*i;
            }
            console.log(fact);
            
    }
}
calcfact(6)



//2.

function Prime(num)
{

    if(num>=1)
        {   
            if(i==1){
                console.log("Is a Prime & composite number");
            }
            if(i==2){
                console.log("Is a Prime  number");
            }
            for(i=2;i<num;i++)
                {
                    if(num%i==0)
                        {
                        return false
                        
                        
                    }
                    else{
                        return true
                        
                        
                    }
                }
        }
    else{
        console.log("it is not a Positive integer");
    }
    
}

let i
console.log( Prime(7));

//3

function sumEvenNumbers(start, end)
        {
            for(let i=sum;i<=end;i++){
                if(i%2==0){
                    sum=sum+i

                }
                
            }
            console.log(sum);

}


let sum=0
sumEvenNumbers(2, 10)

//4

function removeSelectedItem(){
    const selectcolor=document.getElementById('colorSelect')
    const selectedIndex=selectcolor.selectedIndex

    if(selectedIndex!==-1){
        selectcolor.remove(selectedIndex)
    }
}

//5

function changeTextColor() {
    const selectElement = document.getElementById('colorSelect2');
    const color = selectElement.value;
    const sampleText = document.getElementById('sampleText');
    sampleText.style.color = color;
}

//6

function removeitem(){
    const selectcolor=document.getElementById('colorSelect')
    const selectedIndex=selectcolor.selectedIndex

    if(selectedIndex!==-1){
        selectcolor.remove(selectedIndex)
    }
}

//7

function changeTextColor() {
    const selectElement = document.getElementById('colorSelect2');
    const color = selectElement.value;
    const sampleText = document.getElementById('sampleText');
    sampleText.style.color = color;
}