const Folder = require('../models/Folder')

const fetchAllFolder = async (req, res, next) => {
    try {
        const folderdata = await Folder.find({ userId: req.user });
        res.status(200).json({ status: "success", data: folderdata });
    } catch (err) {
        next(err);
    }
}

const createFolder = async (req, res, next) => {
    try {
        const userId = req.user;
        const { folderName } = req.body;
        await Folder.create({ userId, folderName });
        res.status(200).json({ status: "success", msg: "Folder created successfully." });
    } catch (err) {
        next(err);
    }
}

const deleteFolder = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Folder.findByIdAndDelete(id);
        res.status(200).json({ status: "success", msg: "Folder deleted successfully." });
    } catch (err) {
        next(err);
    }
}

module.exports = { fetchAllFolder, createFolder, deleteFolder }