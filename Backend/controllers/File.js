const File = require("../models/File");
const AWS = require("aws-sdk");

const fs = require("fs");
const moveFile = require('../services/MoveFile');

const {findFileById } = require("../services/FileService");
const {findUserById } = require("../services/UserService");



const listFiles = ( async (req, res) => {
    try {
        const id = req.params.id
        const s3 = new AWS.S3();
        const params = {
          Bucket: 'cloudsync-test',
          Prefix: id+"/"
        };
        const result = await s3.listObjectsV2(params).promise();
        res.send(result);
    } catch (e) {res.status(500).send(e.message);} 
})


const createFolder = ( async (req , res) => {
    try {
        const s3 = new AWS.S3();
        await s3.putObject({
            Bucket : "cloudsync-test",
            Key : "test/"
        }, (err, data) => {
        if (err) {
            console.error('Error uploading file:', err);
        } else {
            console.log('File uploaded successfully:', data);
        }
        });
        res.status(201).json()
    } catch (e) {res.status(500).json({"error" : e});}
})



const uploadFile = ( async ( req, res ) => {
    try {
        
        const token = req.body.token

        const user = await findUserById(token);
        
        if (user == null){
            return res.sendStatus( 404 )
        }
        
        const newFolder = "uploads/";
        if (!fs.existsSync(newFolder)){
            fs.mkdirSync(newFolder, { recursive: true });
        }
    
        const file = req.file ? (req.file.destination + "/" + req.file.filename) : null;
        req.file && moveFile.moveFile(file,newFolder)
        

        
        const s3 = new AWS.S3();
        
        const uploadParams = {
            Bucket : "cloudsync-test",
            Key : user.username+"-"+user.id+"/"+req.file.filename,
            Body : fs.readFileSync(req.file.path)
        };
        
        await s3.upload(uploadParams, (err, data) => {
            if (err) {
              console.error(err);
              //return res.status(500).send('Error uploading file');
            }
        });
        
        /*await File.create({
            name : req.file.filename,
            originalname : req.file.originalname,
            size : req.file.size.toString(),
            owner : token
        }).catch((e) => {
            console.log(e)
        })*/
        res.status(201).json()
        
    } catch (e) {
        console.log(e.message)
        res.status(500).send(e.message);}
})





const downloadFile = ( async ( req, res ) => {
    try {
        const file = req.body.file
        const s3 = new AWS.S3();
        const response = await s3.getObject({ Bucket: "cloudsync-test", Key: file }).promise();
        
        // Set proper headers for file download
        res.setHeader('Content-Disposition', `attachment; filename="${file}"`);
        res.setHeader('Content-Type', response.ContentType);
        
        return res.send(response.Body)
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message);
    }
})

const generateFileLink = async (req, res) => {
    try {
        const filekey = req.body.filekey;
        const expires = parseInt(req.body.expires, 10);
        
        const s3 = new AWS.S3();
        const params = {
            Bucket: 'cloudsync-test',
            Key: filekey, 
            Expires: expires, 
        };
        
        const url = await s3.getSignedUrlPromise('getObject', params);
        console.log("Pre-signed URL:", url);
        return res.status(200).json(url);
    } catch (e) {
        console.error("Error generating pre-signed URL:", e);
        return res.status(500).send(e.message);
    }
};


const editFileName = (async (req, res) => {
    try {
        const newfilename = req.body.newfilename;
        const filekey = req.body.filekey;
        const s3 = new AWS.S3();
        console.log(filekey)
        const params = {
            Bucket: 'cloudsync-test',
            CopySource: encodeURI('cloudsync-test/'+filekey), // Source object
            Key: filekey.match(/[^\/]*\//)[0] + new Date().toISOString().replace(/:/g, '-') + "-" +  newfilename // New object name
        }
        
        // Copy the object to a new location with the desired name
        s3.copyObject(params, (copyErr, copyData) => {
          if (copyErr) {
            console.error('Error renaming object:', copyErr);
          } else {
            res.status(200).json();
            
            // If copying is successful, delete the original object
            const deleteParams = {
              Bucket: 'cloudsync-test',
              Key: filekey
            };
            s3.deleteObject(deleteParams, (deleteErr, deleteData) => {
              if (deleteErr) {
                console.error('Error deleting original object:', deleteErr);
              } else {
                console.log('Original object deleted successfully:', deleteData);
              }
            });
          }
        });
        
        return res.status(200).json();
    } catch (e) {return res.status(500).send(e.message);}
})

const deleteFile = ( async ( req, res ) => {
    try {
        const token = req.body.token
        const filekey = req.body.filekey

        
        const s3 = new AWS.S3();
        const params = {
            Bucket : "cloudsync-test",
            Key : filekey
        }

        
        await s3.deleteObject(params, function(err, data) {
            if (err) {
                console.log(err)
                return res.sendStatus( 500 )
            }
        });
        
        return res.status(200).json();
    } catch (e) {
        console.log(e.message)
        return res.status(500).send(e.message);}
})

module.exports = {uploadFile, downloadFile, deleteFile, listFiles, generateFileLink, editFileName};