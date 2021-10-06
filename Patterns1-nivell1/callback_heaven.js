const {
    readdir,
    readFile,
    writeFile
} = require("fs");
const {
    join
} = require("path");
const { callbackify } = require("util");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
    str
        .split("")
        .reverse()
        .join("");

function llegirDirectori (dirPath) {
  return new Promise ((resolve, reject) => {
    readdir(dirPath, (error, files) => {
      if (error) reject(new Error("Error: Folder inaccessible"));
      resolve(files);
    });
  });
}

function llegirArxiu(filePath) {
  return new Promise ((resolve, reject) =>{
    readFile(filePath, "utf8",(error, data) =>{
      if (error) reject(new Error("Error: File error"));
      resolve(data);
    });
  });
}

function escriureArxiu(fileName,contingut) {
  return new Promise ((resolve, reject) =>{
    writeFile(join(outbox,fileName), contingut, error => {
      if (error) reject(new Error("Error: File could not be saved!"));
      resolve(console.log(`${fileName} file was successfully saved in the outbox!`));
    });
  });
}

async function readAndreverse(){
  const files = await llegirDirectori(inbox);
  let contingut=[];
  for(let i=0; i<files.length; i++){
    contingut[i] = await llegirArxiu(join(inbox,files[i]));
    contingut[i] = reverseText(contingut[i]);
    await escriureArxiu(files[i],contingut[i]);
  }
}

readAndreverse();