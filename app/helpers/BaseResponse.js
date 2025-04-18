const successResponse = async (res, data, status = 200, message = 'success') => {
    res.status(status).json({
        key : 'success',
        message : message,
        data : data
    });
};

const failResponse = async (res, status = 400, message = 'fail') => {
    res.status(status).json({
        key : 'fail',
        message : message,
    });
};

module.exports = {
    successResponse, failResponse
};