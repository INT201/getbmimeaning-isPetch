const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/( (height/100) *  (height/100))
}
function getBMIMeaning(weight, height) {
  let BMI = calculateBMI(weight, height)
  if(BMI < 18.5){
    return  "Underweight"
  }
  if(BMI > 25.0){
    return "Overweight"
  }
  else
  return "Normal weight"
}
module.exports = getBMIMeaning
console.log(getBMIMeaning(30,160))
console.log(getBMIMeaning(50,160))
console.log(getBMIMeaning(100,160))
