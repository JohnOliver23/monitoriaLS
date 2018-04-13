function doubleNumber(array){
  return array.map(value => value *2)
}

function ftEven(array) {
  return array.filter(value => value % 2 === 0)
}

function ftOdd(array) {
  return array.filter(value => value % 2 !== 0)
}

function sumArray(array) {
  return array.reduce((total, value) => total + value)
}

function mtArray(array) {
  return array.reduce((total, value) => total * value)
}

function findNumber(array) {
  return array.find(element => element % 2 == 0)
}


module.exports = {
  doubleNumber,
  ftEven,
  ftOdd,
  sumArray,
  mtArray,
  findNumber
};
