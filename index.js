// let num1=prompt('enter number', 4);
// let num2=2=prompt('enter number', 2);
// let operation=prompt('enter operation', "+")
let num1=4, num2=1, operation="+";
function calc(num1,num2, operation){
    if(typeof num1==Number && typeof num2==Number){
        switch(operation){
            case "+":
                alert(num1+num2);
                break;
            case "/":
                alert(num1/num2);
                break;
            case "*":
                alert(num1*num2);
                break;
            case "-":
                alert(num1-num2);
                break;
            case "%":
                alert(num1%num2);
                break;
            default:
                alert("NaN");
    }
}
else{
    alert("NaN");
    }
}    

let array=[0, 1, false, 2, '', 3];
let length=array.length;
function compact(array){
    for(let i=0; i<length;i++){
        if(typeof array[i] == NaN || typeof array[i] == false ||
            typeof array[i] == 0 || typeof array[i] == undefined ||
            typeof array[i] == null || typeof array[i] == "" ){
                delete array[i];
            }
    }
}

