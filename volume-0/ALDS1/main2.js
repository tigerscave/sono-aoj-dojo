const fs = require('fs')
const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(data);

  const Arry = data.split(/\n/);
  console.log(Arry);

  let indices = [];
  let idx1 = Arry[0].indexOf(Arry[1]);
  while (idx1 != -1) {
    indices.push(idx1);
    idx1 = Arry[0].indexOf(Arry[1], idx1 + 1);
  }
  console.log(indices);
  console.log("-------Answer--------");
  console.log("-------Answer--------");
  console.log("-------Answer--------");

  for(let i = 0; i < indices.length; i++) {
    console.log(indices[i]);
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
