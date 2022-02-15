const fs = require("fs");
fs.copyFileSync("file1.txt", "file51.txt");
fs.writeFileSync("file2.txt", "This is a new text - ");
fs.appendFileSync("file5.txt", "Hello World");
