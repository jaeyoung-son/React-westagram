// entry 포인트란 앱에서 가장 먼저 시작하는 시작점이다.
import React from 'react';
import ReactDOM from 'react-dom';
//import Main from './pages/Main/Main';
import Routes from './pages/Routes';
//import Login from './pages/Login/Login';


ReactDOM.render(<Routes />, document.getElementById('root'));