const app = require('express');
const router = app.Router();

const {
    index, show, update, deleteProduct, store
} = require('../app/controllers/ProductController');

router.get('/',index);
router.post('/store',store);

module.exports = router;