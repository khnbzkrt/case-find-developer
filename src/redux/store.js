import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './reducers/app-reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export const appStore = createStore(appReducer, composedEnhancer);
