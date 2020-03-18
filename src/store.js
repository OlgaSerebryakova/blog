import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'src/history';
import applicationReducer from 'src/app/reducer';
import signInReducer from 'src/pages/sign-in/reduce';
import signUpReducer from 'src/pages/sign-up/reduce'
import newPostReducer from "./pages/new-post/reducer";

const logger = createLogger({
  collapsed: true
});

const middleWares = [
  routerMiddleware(history),
  logger
];

const rootReducer = combineReducers({
  router: connectRouter(history),
  signIn: signInReducer,
  signUp: signUpReducer,
  newPost: newPostReducer
});

const store = createStore(rootReducer, applyMiddleware(
  ...middleWares
));

export default store;
