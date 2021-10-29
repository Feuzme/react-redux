import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer from './reducers/CounterReducer'
import AddCartReducer from './reducers/AddCartReducer';

const rootReducer = combineReducers({
    CounterReducer,
    AddCartReducer
})

const customMiddleware = store => next => action => {
    next(action);
}
const store = createStore(rootReducer, applyMiddleware(customMiddleware));

export default store;