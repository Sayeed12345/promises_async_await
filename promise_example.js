// console.log("This is tutorial 37");

// // Pretend that this response is coming from the server
// const students = [
//     { name: "harry", subject: "JavaScript" },
//     { name: "Rohan", subject: "Machine Learning" }
// ]


// function enrollStudent(student) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             students.push(student);
//             console.log("Student has been enrolled");
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000);
//     })
// }

// function getStudents() {
//     setTimeout(function () {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = { name: "Sunny", subject: "Python" }
// enrollStudent(newStudent).then(getStudents).catch(function () {
//     console.log("Some error occured");
// });
// // getStudents();

// // function inside then is ran as - resolve()
// // function inside catch is ran as - reject()






// // const students = [
// //     { name: "Elon Musk", age: "20", rollno: "30" },
// //     { name: "Mark Zuckerburg", age: "30", rollno: "40" }
// // ];

// // function enrollStudents(student) {
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             students.push(student)
// //             console.log("Students has been enrolled")
// //             const error = false;
// //             if (!error) {
// //                 resolve()
// //             } else {
// //                 reject()
// //             }
// //         }, 1000)
// //     })
// // }

// // // function getStudents() {
// // //     setTimeout(function () {
// // //         let str = "";
// // //         students.forEach(function (student) {
// // //             str += `<li> ${student.name}</li>`
// // //         });
// // //         document.getElementById('students').innerHTML = str;
// // //         console.log("students have been fetched");
// // //     }, 5000);
// // // }
// // function getStudents() {
// //     setTimeout(function () {
// //         let str = "";
// //         students.forEach(function (student) {
// //             str += `<li> ${student.name}</li>`
// //         });
// //         document.getElementById('students').innerHTML = str;
// //         console.log("Students have been fetched");
// //     }, 5000);
// // }

// // let newStudent = { name: "Bill Gates", age: "40", rollno: "50" }

// // enrollStudents(newStudent).then(getStudents).catch(() => console.log("some error"))




// // // console.log("This is tutorial 37");

// // // // Pretend that this response is coming from the server
// // // const students = [
// // //     { name: "harry", subject: "JavaScript" },
// // //     { name: "Rohan", subject: "Machine Learning" }
// // // ]


// // // function enrollStudent(student) {
// // //     return new Promise(function (resolve, reject) {
// // //         setTimeout(function () {
// // //             students.push(student);
// // //             console.log("Student has been enrolled");
// // //             const error = false;
// // //             if (!error) {
// // //                 resolve();
// // //             }
// // //             else {
// // //                 reject();
// // //             }
// // //         }, 1000);
// // //     })
// // // }

// // // // function getStudents() {
// // // //     setTimeout(function () {
// // // //         let str = "";
// // // //         students.forEach(function (student) {
// // // //             str += `<li> ${student.name}</li>`
// // // //         });
// // // //         document.getElementById('students').innerHTML = str;
// // // //         console.log("Students have been fetched");
// // // //     }, 5000);
// // // // }
// // // function getStudents() {
// // //     setTimeout(function () {
// // //         let str = '';
// // //         students.forEach(function (student) {
// // //             str += `<li> ${student.name}</li>`
// // //         });
// // //         document.getElementById('students').innerHTML = str;
// // //         console.log("students have been fetched")
// // //     }, 5000);
// // // }


// // // let newStudent = { name: "Sunny", subject: "Python" }
// // // enrollStudent(newStudent).then(getStudents).catch(function () {
// // //     console.log("Some error occured");
// // // });
// // // // getStudents();

// // // // function inside then is ran as - resolve()
// // // // function inside catch is ran as - reject()
