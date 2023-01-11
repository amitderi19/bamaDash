// let num1=prompt('enter number', 4);
// let num2=2=prompt('enter number', 2);
// let operation=prompt('enter operation', "+")

const Bamadash = {
    calc(operand1, operand2, operator) {
        if(typeof operand1==Number && typeof operand2==Number){
            switch(operator){
                case "+":
                    alert(operand1+operand2);
                    break;
                case "/":
                    alert(operand1/operand2);
                    break;
                case "*":
                    alert(operand1*operand2);
                    break;
                case "-":
                    alert(operand1-operand2);
                    break;
                case "%":
                    alert(operand1%operand2);
                    break;
                default:
                    alert("NaN");
        }
    }
    else{
        alert("NaN");
        }
    },
    compact(array){
        const length=array.length;
        for(let i=0; i<length;i++){
            if(typeof array[i] == NaN || typeof array[i] == false ||
                typeof array[i] == 0 || typeof array[i] == undefined ||
                typeof array[i] == null || typeof array[i] == "" ){
                    delete array[i];
                }
        }
    },
    intersection(array1,array2, isStrict){
        throw new Error("Method not implimented.");
    },
    filter(array) {
        throw new Error("Method not implimented.");
    },
    size(collection) { 
        throw new Error("Method not implimented.");
    },
    castArray(value) {
        throw new Error("Method not implimented.");
    }
}

module.exports = Bamadash;



