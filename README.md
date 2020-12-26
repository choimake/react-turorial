# React Tutorial
[Reactのチュートリアル](https://ja.reactjs.org/tutorial/tutorial.html) を元に三目並べを実装してみた。

## How to Use
プロジェクトのディレクトリで
`npm start`
を実行。

[http://localhost:3000](http://localhost:3000)を開くと三目並べがプレイできる。

## Note
以下の点において元のチュートリアルに対して工夫を入れている
- eslint、prettier、husky、lint-stagedなどを導入し、コードの質の向上をはかっている。
- stateに関しては、すべて`useState`で対応。classコンポーネットを使わずに実装した。
