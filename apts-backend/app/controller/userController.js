/* Load Apt Data Access Object */
const AptDao = require('../dao/aptDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Apt entity */
const Apt = require('../model/apt');




/**
 * User Controller
 */
class UserController {
    
    constructor() {
        this.AptDao = new AptDao();
        this.common = new ControllerCommon();

     

    }
    
    create(req, res) {
    }

}



module.exports = UserController;
