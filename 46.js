//  Promises for long running operations

function promiseTimeout(duration) {

    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })

}

promiseTimeout(2000).
    then(() => {
        console.log("2 seconds have passed");
    })
    .then(() => {
        Promise.resolve(42);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });