/**controllerCommonjson
 * Controllers Common functions
 */
class controllerCommon {

    findSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }

    existsSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }

    editSuccess(res) {
        return (result) => {
            res.status(201); // Created/Updated/Deleted
            res.locals.id = result;
            res.json({
                "res": res.locals.username,
                "pas": res.locals.password
            });
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(error);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404); // Not found
            res.json(error);
        }
    }

    notAuth(res) {
        const message = {
            message: "AUTH FAILED"
        };
        return res.status(401).json(message);
    }

    notAuthError(res) {
        const message = {
            message: "AUTH FAILED"
        };
        return (error) => {
            return res.status(401).json(message);
        }
    }
    
}

module.exports = controllerCommon;
