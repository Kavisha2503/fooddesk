import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { userStore } from './storage/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={userStore}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
