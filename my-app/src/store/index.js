import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { bodyPartReducer } from './reducers/bodyPartReducer';
import { answersReducer } from './reducers/answersReducer';
import { bmiReducer } from './reducers/bmiReducer';
import { allAnswersReducer } from './reducers/allAnswersReducer';
import { sendCommentReducer } from "./reducers/sendCommentReducer";
import { voteReducer } from "./reducers/voteReducer";

const rootReducer = combineReducers ({
	bodyPart: bodyPartReducer,
	answers: answersReducer,
	allAnswers: allAnswersReducer,
	bmi: bmiReducer,
	comment: sendCommentReducer,
	vote: voteReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))
