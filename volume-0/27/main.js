let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  const myDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const numbersArray = data.split("\n");
  console.log("----This is data----");
  console.log(data);

  let tmpAry = [];
  for(let i = 0; i < numbersArray.length; i++){
    tmpAry.push(numbersArray[i].split(" "));
  }

  for(let j = 0; j < 4; j++){
    var month = tmpAry[j][0];
    var day = tmpAry[j][1];
    var date = new Date("2/6/2001");
    const Day = new Date("2004" + "/" + month + "/" + day);
    if(day>0){
      console.log(myDay[Day.getUTCDay()]);
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
