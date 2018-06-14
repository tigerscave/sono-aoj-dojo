let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  const upperData = data.toUpperCase();
  console.log("---this is data---");
  console.log(upperData);
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
