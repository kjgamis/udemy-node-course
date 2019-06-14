const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1,2,3])
        reject('Things went wrong!')
    }, 2000)
})
// resolve and reject avoids the pain of having to define undefined and a real value in a typical callback in the proper order as an argument

// similarly, result and error can be found in the callback
doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})