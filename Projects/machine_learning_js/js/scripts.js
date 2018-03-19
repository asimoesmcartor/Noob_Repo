let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   let net = new brain.NeuralNetwork();
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
   return output;
}
train(trainingData);



const inputResults = $("#inputTextResults").val();


function logResults() {
  console.log("Logging results...")
  if (inputResults.length == 0) {
    $("#results").text("Please type in a Tweet above.");
  } else {
  console.log(inputResults);
  }
}
logResults();




$("#submitTweetButton").on( "click", function() {
  console.log("Executing results...");
  console.log(execute(inputResults));
  $("#results").text(execute(inputResults));
});
