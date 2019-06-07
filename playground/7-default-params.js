// setup default params value to make sure that th param does not the value of 'undefined'
const greeter = (name = 'user') => {
  console.log(`Hello ${name}`)
}

greeter('Karen')

greeter()