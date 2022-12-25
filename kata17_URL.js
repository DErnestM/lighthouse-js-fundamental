/*
Create a function named urlDecode that will receive a URL encoded string, and return the a JavaScript object that represents that data.
*/

const urlDecode = function(text) {

  let values = []
  let output = {}

  if(text.includes("&")){
    
    values = text.split("&")
    
    values.forEach(function(word){
    word = word.replace(/%20/g," ")
    let key = word.slice(0, word.indexOf("="))
    let value = word.slice(word.indexOf("=")+1)
    output[key] = value
    })
  }else{
    text = text.replace(/%20/g," ")
    let key = text.slice(0, text.indexOf("="))
    let value = text.slice(text.indexOf("=")+1)
    output[key] = value
    }
  return output
  }
;

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
*/


/*

const urlDecode = function(text) {
  let output = {};

  const processKeyValuePair = function(keyValue) {
    keyValue = keyValue.replace(/%20/g, " ");
    let key = keyValue.slice(0, keyValue.indexOf("="));
    let value = keyValue.slice(keyValue.indexOf("=") + 1);
    output[key] = value;
  };

  if (text.includes("&")) {
    let keyValuePairs = text.split("&");
    keyValuePairs.forEach(processKeyValuePair);
  } else {
    processKeyValuePair(text);
  }

  return output;
};

*/