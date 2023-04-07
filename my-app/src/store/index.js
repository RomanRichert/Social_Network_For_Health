import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk"
import { bodyPartReducer } from './reducers/bodyPartReducer';
import { answersReducer } from './reducers/answersReducer';
import { bmiReducer } from './reducers/bmiReducer';
import { storiesReducer } from './reducers/storiesReducer';
import { allAnswersReducer } from './reducers/allAnswersReducer';
import { sendCommentReducer } from "./reducers/sendCommentReducer";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['bodyPart', 'answers']
}

const rootReducer = combineReducers ({
	bodyPart: bodyPartReducer,
	answers: answersReducer,
	allAnswers: allAnswersReducer,
	bmi: bmiReducer,
	stories: storiesReducer,
	comment: sendCommentReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)