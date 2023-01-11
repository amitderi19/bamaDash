let num1=4, num2=2;
function calc(num1,num2, operation){
    if(typeof num1==Number &&typeof num2==Number){
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
// Bamadash.calc("2", "bob", "+")         

Bamadash.intersection([1,2,3], [3,'1',6], true);
Bamadash.intersection([1,2,3], [3,'1',6], false);
Bamadash.intersection([[1], 2, 3], [3, '1',6], false); 
Bamadash.intersection([1, 2, 3], [3, '1', 6]) 