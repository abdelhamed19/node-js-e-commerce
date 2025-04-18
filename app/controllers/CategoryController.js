const validation = require('../requests/categories/createCategory');
const Category = require('../models/category');
const response = require('../helpers/BaseResponse');

exports.index = async (req, res) => {
    try {
        const data = await Category.find();
        return response.successResponse(res, data);
    }
    catch (error) {
        return response.failResponse(res, 400);
    }
};

exports.store = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return response.failResponse(res, 400, 'Please insert data')
        }
        const validated = validation.validate(data, validation.categoryRequet);
        if (validated) {
            return response.failResponse(res, 400, validated)
        }
        const create = await Category.insertOne(data);
        return response.successResponse(res, create, 201, 'created')
    }
    catch (error) {
        return response.failResponse(res, 400, error.message)
    }
};