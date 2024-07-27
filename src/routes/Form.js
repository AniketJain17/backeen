const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken');
const { fetchAllForm, fetchFormById, createForm, updateForm, deleteForm } = require('../controllers/Form');

router.get('/form/view', verifyToken, fetchAllForm);
router.get('/form/view/:formId', verifyToken, fetchFormById);
router.post('/form/create', verifyToken, createForm);
router.patch('/form/update/:formId', verifyToken, updateForm);
router.delete('/form/delete/:formId', verifyToken, deleteForm);

module.exports = router;