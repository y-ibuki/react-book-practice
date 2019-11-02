import React from 'react';
import ReactDOM from 'react-dom';

let dom = document.querySelector('#root');

let title = '新タイトル';
let message = '新しいメッセージです。';

let el = (
  <div>
    <h2>{title}</h2>
    <p>{message}</p>
  </div>
)
ReactDOM.render(el, dom);