// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "1,2,3,4,5"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of numbers.
  const numbers = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    const number = parseInt(str);
    numbers.push(number);
  }
  
  // Peform some calculations on the numbers.
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  
  // === EDIT THE CODE BELOW ===
  // Complete the functions below to make the program work!
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the length of the array
   */
  function getLength(numbers) {
    return numbers.length;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the sum of the numbers
   */
  function getSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the mean of the numbers
   */
  function getMean(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    let mean = total/numbers.length;
    return mean;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the smallest of the numbers
   */
  function getMin(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if(min >= numbers[i]){
            min = numbers[i];
        }
    }
    return min;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the largest of the numbers
   */
  function getMax(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if(max <= numbers[i]){
            max = numbers[i];
        }
    }
    return max;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number} the range of the numbers (max - min)
   */
  function getRange(numbers) {
    let max = getMax(numbers);
    let min = getMin(numbers);
    return `from ${min} to ${max}`;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the even numbers in the array
   */
  function getEvens(numbers) {
    let even = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            even.push(numbers[i]);
        }
    }
    return even;
  }
  
  /**
   * @param {number[]} numbers an array of integers
   * @returns {number[]} the odd numbers in the array
   */
  function getOdds(numbers) {
    let odd = [];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 !== 0){
            odd.push(numbers[i]);
        }
    }
    return odd;
  }