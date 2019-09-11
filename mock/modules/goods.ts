const MockGoods = require('mockjs');

function goodsList() {
    return MockGoods.mock({
            "code": 200,
            "data": {
                'list|20': [
                    {
                        "goodsId": "@id()",
                        "goodsName": "@csentence(5, 15)",
                        "date": "@date()",
                        "avatar": "@image('200x200','red','#fff','avatar')",
                        "description": "@paragraph()",
                        "sellPrice|1-100": 100,
                        "salesNum|100-1000": 1000,
                        "originalPrice|100-500": 500,
                    }
                ]
            }
        })
    
}

module.exports = {
    goodsList: goodsList()
}