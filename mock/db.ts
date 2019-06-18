const user = require('./modules/user.ts')
const addRess = require('./modules/address.ts')

module.exports = {
    user: user.userInfo,
    address: addRess.address,
}