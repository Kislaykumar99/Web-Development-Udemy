const add=(x,y) => x+y;

const PI=3.14159;
const square=(x )=> x*x;
// module.exports ="Hi";
// module.exports.add=add;
// module.exports.PI=PI;
// module.exports.square=square;

//we can use shorter syntax provided by node documentation

exports.add=add;
exports.PI=PI;
exports.square=square;