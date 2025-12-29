//  Async Await for managing promises

function promiseTimeout(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

// define async function
async function run() {
    // logic 
    console.log("start");
    await promiseTimeout(2000);
    console.log("stop");
    console.log("42");
}

// call async function
run();