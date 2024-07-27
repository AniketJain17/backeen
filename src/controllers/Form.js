const Form = require('../models/Form')

const fetchAllForm = async (req, res, next) => {
    try {
        const formdata = await Form.find({ userId: req.user });
        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
}

const fetchFormById = async (req, res, next) => {
    const formId = req.params.formId;
    try {
        const formdata = await Form.findById(formId);
        res.status(200).json({ status: "success", data: formdata });
    } catch (err) {
        next(err);
    }
}

const createForm = async (req, res, next) => {
    try {
        const userId = req.user;
        const { formName } = req.body;
        const newForm = await Form.create({ userId, formName, formTheme: 1 });
        res.status(200).json({ status: "success", formId: newForm._id, msg: "Form created successfully." });
    } catch (err) {
        next(err);
    }
}

const updateForm = async (req, res, next) => {
    try {
        const formId = req.params.formId;
        const { formName, formTheme, formSequence } = req.body;
        await Form.findByIdAndUpdate(formId, { formName, formTheme, formSequence });
        res.status(200).json({ status: "success", msg: "Form updated successfully." });
    } catch (err) {
        next(err);
    }
}

const deleteForm = async (req, res, next) => {
    try {
        const { formId } = req.params;
        await Form.findByIdAndDelete(formId);
        res.status(200).json({ status: "success", msg: "Form deleted successfully." });
    } catch (err) {
        next(err);
    }
}

module.exports = { fetchAllForm, fetchFormById, createForm, updateForm, deleteForm }