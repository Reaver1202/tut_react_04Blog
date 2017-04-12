import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// delete App
//import App from './components/app';
import reducers from './reducers';

// browserHistory = tells ReactRouter how to interprete changes of the URL
// browserHistory: http://www.blog.com/posts/5 --> browserHistory considers everything after domain --> "/posts/5"
// hashHistory: http://www.blog.com/#posts/5 --> considers everything behind the "#"
// memoryHistory: doesn´t really use the URL at all for reading
import { Router, browserHistory } from 'react-router';

// define available routes:
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
