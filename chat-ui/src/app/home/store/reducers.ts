import { createReducer, on } from "@ngrx/store";
import { loadMessagesFailure, loadMessagesSuccess, receiveMessage } from "./actions";
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
    on(receiveMessage, (state, { message }) => ({
        ...state,
        chatMessages: [...state.chatMessages, message]
    })),
);

export default reducer;