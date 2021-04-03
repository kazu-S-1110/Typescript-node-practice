// 裏で初めに以下2行の処理が走っている
// module.exports = {}
// exports = module.exports

//概略 exports = module.exports = {}
module.exports.hello = 'hello';
exports.name = 'peter';

//outputs
// { hello: 'hello', name: 'peter' }
