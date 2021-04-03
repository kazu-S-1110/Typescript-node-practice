import express from 'express';
const app = express();
app.use('/', (req, res, next) => {
  //ミドルウェアとして実装する際にnextを使用する,上から順に実行される
  console.log('Hello!');
  next();
});
app.use('/', (req, res, next) => {
  console.log('Yahoooo!');
  next();
});
app.get('/', (req, res, next) => {
  res.send('<h1>Helloooo</h1>');
});
//エラーハンドリングする際の記述は以下のようにする
// app.use((err, req, res, next) => {
//   next();
// });
app.listen(3000); //接続方法はtscでコンパイルしてからnpmstartでローカルホストを開く
