var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController');


router.get('/', employeeController.displayEmployees);
router.get('/add', employeeController.renderAddEmployeeForm);
router.get('/add', employeeController.addEmployee);
router.get('/update/:id', employeeController.renderUpdateForm);
router.get('/update/:id', employeeController.updateEmployee);
module.exports = router;
