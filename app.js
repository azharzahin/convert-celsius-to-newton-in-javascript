
//converting celcius to newton forecast using basic javascript.
//today temperature in celsius is 38 degree
//now converting this in newton

const celsius = 38 ;

//convert celsius to newton using this formula and 
using math.floor for no decimal value thats it...

const newton = Math.floor(celsius * (33/100));

//and print value in newton u can check in console.
console.log(`The temperature is ${newton} Newton.` )
