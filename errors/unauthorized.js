const CustomAPIError = require('./custom-api-error.js');
const { StatusCodes } = require('http-status-codes');

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
