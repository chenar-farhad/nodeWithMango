const fs = require("fs/promises");

/* ---- 1st way to write ----*/
// fs.writeFile('text2', 'component test2').then((data)=>{
//     console.log("done");
// }).catch((err)=>{
//     console.log("failed!");
// })
/*---------------------END--------------------------*/

/* ---- 2nd way to write ----*/
// async function main(){

//    await fs.writeFile('test.js',"tesst")
// }
// main();
/*---------------------END--------------------------*/

/* ---- 3rd way to write ----*/
// async function main(filename,content){
//     await fs.writeFile(filename,content)
//  }
//  main('test.css','background-color:red;');
/*---------------------END--------------------------*/

/* ---- 4th way to write and UPDATE ----*/
// async function main() {
//   fs.appendFile("test.css", "\nbackground-color:pink;");
//}
/*---------------------END--------------------------*/

/* ---- 5th way to write and UPDATE ----*/
// async function main(filename, content) {
//   try {
//     await fs.writeFile(filename, content);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// fs.appendFile("test.css", "\nbackground-color:pink;");
/*---------------------END--------------------------*/

/* ---- 6th way to write and UPDATE ----*/
// async function main(filename, data) {
//   try {
//     await fs.appendFile(filename, data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// main("test.css", "\nbackground-color:pink;");

/*---------------------END--------------------------*/

/* ---- 1st way to read ----*/
// fs.readFile('text2','utf-8').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err.message);
// })
/*---------------------END--------------------------*/

/* ---- 2nd way to read ----*/
// async function main() {
//   try {
//     const names = await fs.readFile("text2", "utf-8");
//     console.log(names);
//   } catch (error) {
//     console.log(error.mrssage);
//   }
// }
// main();
/*---------------------END--------------------------*/

/*--- 3rd way to read ----*/
// async function main() {
//   const names = await fs.readFile("text2", "utf-8");
//   console.log(names);
// }
// main();
/*---------------------END--------------------------*/
