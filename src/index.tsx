import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';

import App from './App';

import data from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={data}>
		<App />
	</Provider>,
);
