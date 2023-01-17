let x = [5,43,3,8,5,776,56,100,1]
function ejercicio5 (x){
    let numberArray = x.map(el=>parseInt(el))
    return console.log(numberArray.sort(function(a,b){return a - b}));
    }
