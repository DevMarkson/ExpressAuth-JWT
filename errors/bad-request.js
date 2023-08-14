const CustomAPIError = require('../errors/custom-error')
const { StatusCodes } = require('http-status-codes');
class BadRequestError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.StausCodes = StatusCodes.BAD_REQUEST
    //   this.statusCode = 400
    }
  }
  
  module.exports = BadRequestError