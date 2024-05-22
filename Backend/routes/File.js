const express = require('express')
const router = express.Router()

const multer = require('../services/Multer')

const {uploadFile, downloadFile, deleteFile, listFiles, generateFileLink, editFileName} = require('../controllers/File');

router.post('/upload', multer.upload.single('file') , uploadFile);

router.post('/delete', deleteFile);

router.get('/:id', listFiles);


router.post('/download/', downloadFile);
router.post('/generate', generateFileLink)

router.post('/edit', editFileName);

module.exports = router;