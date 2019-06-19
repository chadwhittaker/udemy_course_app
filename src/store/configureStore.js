import { createStore, combineReducers, compose } from 'redux';

import placesReducer from './reducers/places'

const rootReducer = combineReducers({
  places: placesReducer,
});

// to add Redux dev tools to react-native-debugger
let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
}

export default configureStore;