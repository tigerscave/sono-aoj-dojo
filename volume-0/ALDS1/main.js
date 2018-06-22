const fs = require('fs')
const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);

  const Arry = data.split(/\n/);
  console.log(Arry);
  const T = Arry[0].split("");
  console.log(T);
  const P = Arry[1].split("");
  console.log(P);
  console.log(T[0]);

  console.log("-------Answer--------");
  var j = 0;
  for(let i = 0; i < T.length; i++) {
    if(T[i] == P[j] && T[i+1] == P[j+1]){
      console.log(i);
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
