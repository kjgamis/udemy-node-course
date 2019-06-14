// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// callback is defined in the function itself where the logic is written
// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     callback(num1 + num2)
//   }, 2000)
// }

// add(1, 4, (sum) => {
//   console.log(sum) // Should print: 5
// })

// this is the current callback pattern we use for callbacks
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error!', undefined)
    callback(undefined, [1,2,3])
  }, 2000)
}

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error)
  }
  console.log(result)
})