const fs = require("fs");
const path = require("path");

const moveFile = (file , dest) => {
    console.log("dest file : " + dest);
    const currentDest = path.basename(file);
    const targetDest =  path.resolve(dest, currentDest)
    fs.rename(file, targetDest, (err)=>{
        if(err) throw err;
        else console.log('Successfully moved');
      });
}

module.exports = {moveFile}