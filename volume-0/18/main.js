let fs = require('fs');

const yourAnswerFunctionComesHere = data => {
  console.log("---this is data---");
  console.log(typeof(data));
  const numbersArray = data.split(" ");
  numbersArray.sort((a,b) => {
    return b - a;
    }
  );
  const numbersData = numbersArray.join(" ");
  console.log(numbersData);
}

const readFile = path => {
  fs.readFile(path, 'utf8', (err, data) => {
    yourAnswerFunctionComesHere(data);
  });
}

const readFileWithoutArg = () => {
  const data = require('fs').readFileSync('/dev/stdin', 'utf8');
  yourAnswerFunctionComesHere(data);
}

let sampleInputPath = "";

if(process.argv.length > 2) {
  sampleInputPath = process.argv[2];
  readFile(sampleInputPath);
} else {
  readFileWithoutArg();
}
