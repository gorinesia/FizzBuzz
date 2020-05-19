`use strict`
//ようこそ、のダイアログを表示
// alert('Welcome to JavaScriprt!!');

//実行を押したときの挙動//

//HTMLの中からIdがbtnのエレメントを取得
let btn = document.getElementById('btn');
//ボタンエレメントのクリックイベントをトリガーにコールバック処理を作成
btn.addEventListener('click', function () {

  //入力値の取得//

  //HTMLの中からIdがfizzのエレメントを取得
  let fizzNumber = document.getElementById('fizz');
  //fizzNumのinputに入力された数字から値を取得
  let fizzes = fizzNumber.value;
  //HTMLの中からIdがbuzzのエレメントを取得
  let buzzNumber = document.getElementById('buzz');
  //BuzzNunのinputに入力された数字から値を取得
  let buzzes = buzzNumber.value;

  //結果情報ベース作成

  //HTMLの中からIdがoutputのエレメントを取得
  let outputArea = document.getElementById('output');
  //結果エレメントの子要素を取得
  outputArea.innerHTML = '';
  //pタグのエレメントを作成
  let ptag = document.createElement('p');
  //pタグのエレメントに結果発表ヘッダーの固定値をセット
  ptag.textContent = '【出力】';
  //結果エレメントの子エレメントとしてpタグのエレメントを追加
  outputArea.appendChild(ptag);


  //結果情報の中身を作成

  //fizzbuzz問題のループ文
  for (let i = 1; i < 100; i++) {
    let value = '';
    if (i % fizzes === 0 && i % buzzes === 0) {
      value = "FizzBuzz";
    } else if (i % fizzes === 0) {
      value = "Fizz";
    } else if (i % buzzes === 0) {
      value = "Buzz";
    } else {
      value = '';
    }
    //新たにpタグのエレメントを作成、メッセージのセット、子要素として追加
    let fizzbuzz = document.createElement('p');
    fizzbuzz.textContent = value;
    let ul = document.querySelector('ul')
    outputArea.appendChild(fizzbuzz);
  }
});