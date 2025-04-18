const validate = require('validate.js');
const productRequest = {
    title: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 30
        }
    },
    description: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 50
        }
    },
    price: {
        presence: true,
        numericality: {
            greaterThan: 0,
        }
    },
    category: {
        presence: true
    },

};

module.exports = {
    productRequest,
    validate
};