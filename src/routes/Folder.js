const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const { fetchAllFolder, createFolder, deleteFolder } = require('../controllers/Folder');

router.get('/folder/view', verifyToken, fetchAllFolder);
router.post('/folder/create', verifyToken, createFolder);
router.delete('/folder/delete/:id', verifyToken, deleteFolder);

module.exports = router;