import { createReducer, on } from "@ngrx/store";
import { loadMessages, loadMessagesFailure, loadMessagesSuccess } from "./actions";
import { HomeState } from "./state";

const initialState: HomeState = {
    loading: false,
    chatMessages: [],
    error: null
};

const reducer = createReducer(
    initialState,
    on(loadMessagesSuccess, (state, { messages }) => ({
        ...state,
        chatMessages: messages
    })),
    on(loadMessagesFailure, (state, action) => ({
        ...state,
        error: action.error
    })),

);

export default reducer;