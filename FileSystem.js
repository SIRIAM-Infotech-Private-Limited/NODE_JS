const fs = require("fs")

//new txt file will be created
// fs.writeFileSync("read.txt", "Hello World"); 

//fs.writeFileSync("read.txt", "Good morning,Hello World"); 

//fs.appendFileSync('read.txt', 'Its Summer !')

//To read
const buf_data =fs.readFileSync('read.txt');
console.log(buf_data);


orig_data = buf_data.toString();
console.log(orig_data);

//To rename a file
fs.renameSync('read.txt', "readWrite.txt");