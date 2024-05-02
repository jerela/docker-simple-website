import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const myElement = (
	<div>
		<h1>Hello</h1>
		<p>This is an HTML element rendered with React.</p>
	</div>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);