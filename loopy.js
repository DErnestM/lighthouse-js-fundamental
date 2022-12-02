// Loop that prints from 100 to 200

for (let loop = 100; loop <= 200; loop++){
  if (loop % 3 === 0 && loop % 4 === 0){
    console.log("LoopyLighthouse")
  }else if (loop % 3 === 0){
    console.log("Loopy")
  }else if(loop % 4 === 0){
    console.log("Lighthouse")
  }else{
    console.log(loop)
  }
}