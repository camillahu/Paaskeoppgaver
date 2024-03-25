

function calculateDays(date, easter, callback){
   let result = easter - date;
   callback(result);
   console.log(result)
}

function displayDOM(output) {
    counter = output;
}