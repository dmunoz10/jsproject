// just an example of arrays, not connected to script.js
const randomNumbers = [2, 17, 0, 32, 5];

function largestNumber(){

  let biggest= Math.max.apply(null,randomNumbers);
  console.log(biggest);
}

largestNumber();

let ascending= true;
for (i=0; i< randomNumbers.length; i++){
if(randomNumbers[i] >= randomNumbers[i++]){
ascending=false;
break;
}
}
console.log(ascending);