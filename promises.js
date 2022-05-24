function promises() {
    return new Promise(function (resolve, reject) {
        const error = true;
        if (error) {                   //if error comes true
            console.log("Function is not working")
            reject("Sorry for this")
        } else {                      //if there is no error
            console.log("Function is working");
            resolve()
        }
    });
}

promises().then(() => console.log("yes"))
    .catch((error) => console.log("No : " + error))


























//    original;

// function promises() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log("function is working");
//                 resolve();
//             } else {
//                 console.log("function is not working");
//                 reject("sorry for this");
//             }
//         }, 2000);
//     })
// }

// promises().then(function () {
//     console.log("yes")
// }).catch(function (error) {
//     console.log("no " +  error)
// })