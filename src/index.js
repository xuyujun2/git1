import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import { HashRouter as Router } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import createHistory from 'history/createBrowserHistory';
import { LocaleProvider } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import 'moment/locale/zh-cn';
import configureStore from './store/configureStore.js';
import routes from './routes/routes.js';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const history = createHistory();
const store = configureStore();



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
