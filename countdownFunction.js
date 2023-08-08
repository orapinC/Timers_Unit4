// Timers Exercise
// countdown
//write a fuction called countdown that accepts a number as a parameter and every 1000 milliseconds(1sec) decrements the value
// and console.logs it.
// Once the value is 0 it should log "Done!" and stop.

function countDown(num){
    for (let i = num; i>0; i--){
      setTimeout(function(){console.log(i)},1000)
    };
    setTimeout(function(){console.log("DONE!")},1000)
  }