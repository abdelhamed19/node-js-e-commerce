const validate = require('validate.js');
const categoryRequet = {
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
};

module.exports = {
    validate, categoryRequet
};