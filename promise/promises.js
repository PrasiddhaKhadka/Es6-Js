promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Promise is resolved!");
    }, 2000);
    
});

promise.then((message)=>{
    console.log(message);
}
).then(()=> console.log('Promise resolved with message: ' + message)).catch((error)=>{
    console.log("Promise rejected with error: " + error);
}
);
