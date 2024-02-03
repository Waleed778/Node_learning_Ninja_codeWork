/*setTimeout(() => {
    console.log('3 second have passed');
}, 3000);*/


/*let time = 0;

setInterval(() => {
    time += 2;
    console.log(time + 'seconds have passed');
}, 2000);*/

/*let time = 0;

let timer = setInterval(() =>{
    time += 2;
    console.log(time + 'seconds have passed');
    if(time > 8){
        clearInterval(timer);
    }
}, 2000)*/

//console.log(__dirname);
//console.log(__filename);

let stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));

console.log(stuff.adder(5,6));

console.log(stuff.adder(stuff.pi, 5));
