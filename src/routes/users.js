
const router = require('express-promise-router')();


const {
    index,
    newUser,
    replaceUser,
    deleteUser,
    getUser,
    getUsersCars,
    newUserCar
} = require('../controllers/userController');

router.get('/', index);
router.post('/', newUser);
router.get('/:userId', getUser);
router.put('/:userId', replaceUser);
router.delete('/:userId', deleteUser);

router.get('/:userId/cars', getUsersCars);
router.post('/:userId/cars', newUserCar);



module.exports = router;