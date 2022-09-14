import React from 'react';
import './assets/scss/core.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import favicon from './assets/images/icons/favicon.png'

function App() {
	return (
		<>
			<h1>hello world</h1>
			<img src={favicon}  alt='favicon' />
		</>
	);
}

export default App;
