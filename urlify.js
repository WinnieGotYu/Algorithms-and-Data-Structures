/** write a method that takes in a string
 * and replace all spaces in a string with '%20'.
 * assume string has sufficient space at the end
 *
 * input: 'Mr John Smith'
 * output: 'Mr%20Jon%20Smith'*/

function urlify(str) {
  return str.split(' ').join('%20')
}

console.log(urlify('Mr John Smith')) //Mr%20John%20Smith
console.log(urlify('Hello World')) //Hello%20World
