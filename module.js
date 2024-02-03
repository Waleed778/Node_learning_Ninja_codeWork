/*const xyz = require('./people');

console.log(xyz.people, xyz.ages);*/

/*const { people } = require('./people')

console.log(people);*/

/*const { ages } = require('./people')

console.log(ages);*/

const { people, ages } = require('./people')

console.log(people, ages);
//console.log(people);

const os = require('os')
console.log(os.platform(), os.homedir());