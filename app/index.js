import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
// import { useRouterHistory } from 'react-router'; // 添加basename
// import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './router';
import reducers from './reducers';
import initState from './constants/initState';


// const history = useRouterHistory(createHistory)({
//   basename: '/entry'
// });
const store = createStore(reducers, initState);
const history = syncHistoryWithStore(browserHistory, store);

render (
	<Provider store={store}>
    <Root history={history} />
  </Provider>,
  document.getElementById('app')
)