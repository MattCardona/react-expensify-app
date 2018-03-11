const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hello their from Promise!');
    reject('Something went wrong!');
  }, 3500);
});

console.log('before the Promise gets resolved');

promise.then((data) => {
  console.log(`This is resolved: ${data}`);
}).catch((err) => {
  console.log(`This is rejection: ${err}`);
});

console.log('after Promise');