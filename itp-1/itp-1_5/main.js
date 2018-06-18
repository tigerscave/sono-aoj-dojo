let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  const numbersArray = data.split("\n");
  console.log("----This is data----");
  console.log(data);

  let tmpAry = [];
  for(let i = 0; i < numbersArray.length; i++){
    tmpAry.push(numbersArray[i].split(" "));
  }

  console.log(tmpAry);
  console.log("-------this is answer----------");
  for(let j = 0; j < numbersArray.length-1; j++){
    var height = tmpAry[j][0];
    var width = tmpAry[j][1];
    for(let k = 0; k < height; k++){
      if(k % 2 == 0){
          for(let l = 0; l < width/2; l++){
            console.log("#.");
            }
        }else{
          for(let l = 0; l < width/2; l++){
            console.log(".#");
          }
        }
    }
  }
}

const readFile = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    yourAnswerFunctionComesHere(data);
  });
}

try {
  readFile(process.argv[2]);
} catch(error){
  console.log(error.message);
}
