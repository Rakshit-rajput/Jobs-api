const {StatusCodes} = require('http-status-codes')
const CustomeAPIError = require('./custom-api')

class UnauthenticatedError extends CustomeAPIError{
    constructor(message){
        super(message);
        this.StatusCodes = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError