const CustomAPIError = require('../errors/custom-error');
const { StatusCodes } = require('http-status-codes');


class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
      //   this.statusCode = 401
    }
  }
  
  module.exports = UnauthenticatedError