import React from 'react';
import ReactDOM from 'react-dom';

import '../css/app.css';

console.log('Hello World !!!');

const App = () => {
    return <h1>Bonjour à tous</h1>
}

const rootElement = document.querySelector('#app');
ReactDOM.render(<App/>, rootElement);
