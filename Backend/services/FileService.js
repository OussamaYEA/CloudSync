const File = require("../models/File");

const findFileById = async(id) => {
    try {
        const file = await File.scan('id').eq(id).exec();
        if (file.length > 0 ) return file[0];
        else return null;
    } catch (e) {
        console.log(e)
        throw e;
    }
}

module.exports = {findFileById}