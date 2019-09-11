const user = require('./modules/user.ts')
const addRess = require('./modules/address.ts')
const goods = require('./modules/goods.ts')

module.exports = {
    user: user.userInfo,
    address: addRess.address,
    goodsList: goods.goodsList,
}