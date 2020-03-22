import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'src/history';
import thunk from 'redux-thunk';

import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reducer';
import signUpReducer from 'src/pages/sign-up/reducer'
import newPostReducer from "./pages/new-post/reducer";

const logger = createLogger({
  collapsed: true
});

const routerMiddle = routerMiddleware(history);

const rootReducer = combineReducers({
  router: connectRouter(history),
  applicationReducer: applicationReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  newPost: newPostReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddle, logger, thunk)
);

export default store;
