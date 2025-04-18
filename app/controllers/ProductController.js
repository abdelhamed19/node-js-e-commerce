const Product = require('../models/product');
const response = require('../helpers/BaseResponse');
const validation = require('../requests/products/createProduct');

exports.index = async (req, res) => {
    try {
        const products = await (Product.find().populate('category'));
        return response.successResponse(res, products);
    }
    catch (error) {
        return response.failResponse(res, 400, error.message)
    }
};

exports.store = async (req, res) => {
    try {
        const data = req.body;
        if (!data) {
            return response.failResponse(res, 400, 'Please insert data')
        }
        const validated = validation.validate(data, validation.productRequest);
        if (validated) {
            return response.failResponse(res, 400, validated)
        }
        const create = await Product.insertOne(data);
        return response.successResponse(res, create, 201, 'created')
    }
    catch (error) {
        return response.failResponse(res, 400, error.message)
    }
};