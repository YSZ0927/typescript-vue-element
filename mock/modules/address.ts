const MockAddress = require('mockjs');

function address() {
    return {
        address: MockAddress.mock({
            "code": 200,
            "data": {
                'list|100': [{
                    'name': '@city()',
                    'value|1-100': 100,
                }]
            }
        })
    }
}

module.exports = {
    address: address()
}