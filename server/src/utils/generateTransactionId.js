const crypto = require('crypto')

function generateTransactionId(paymentDetails) {
  const paymentDetailsString = JSON.stringify(paymentDetails);
  const hash = crypto.createHash('sha1');
  hash.update(paymentDetailsString);
  return hash.digest('hex');
}

module.exports = generateTransactionId;