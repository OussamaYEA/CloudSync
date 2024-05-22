const express = require('express')
const router = express.Router()

const {getUserById, updateUser} = require('../controllers/User');

router.get('/:id', getUserById);
router.post('/update', updateUser);


module.exports = router;