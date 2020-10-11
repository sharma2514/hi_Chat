const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const userController = require('../controllers/user_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/users', require('./user'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
router.use('/likes', require('./likes'));

router.use('/api', require('./api'));
// for any further routes, access from here
// router.use('/routeName', require('./routerFile'))


module.exports = router;