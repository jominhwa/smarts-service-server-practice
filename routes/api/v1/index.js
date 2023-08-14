const router = require('express').Router();
const superAdmin = require('./super-admin/super-admin-index');
router.use('/super-admin', superAdmin);
module.exports = router;