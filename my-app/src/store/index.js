import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { bodyPartReducer } from './reducers/bodyPartReducer';
import { answersReducer } from './reducers/answersReducer';

const rootReducer = combineReducers ({
	bodyPart: bodyPartReducer,
	answers: answersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))