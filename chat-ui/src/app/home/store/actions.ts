import { createAction, props } from "@ngrx/store";
import { ChatMessage } from "../../server/models/chat-message";
import { HttpErrorResponse } from "@angular/common/http";

export const loadMessagesAndListen = createAction   ('[Home] Load Messages And Listen');

export const receiveMessage = createAction('[Home] Receive Message', props<{ message: ChatMessage }>());
export const receiveMessageError = createAction('[Home] Receive Message Error', props<{ error: HttpErrorResponse }>());
export const loadMessagesSuccess = createAction('[Home] Load Messages Success', props<{ messages: ChatMessage[] }>());
export const loadMessagesFailure = createAction('[Home] Load Messages Failure', props<{ error: HttpErrorResponse }>());

export const postMessage = createAction('[Home] Post Message', props<{ message: ChatMessage }>());
export const postMessageSuccess = createAction('[Home] Post Message Success', props<{ id: string }>());
export const postMessageFailure = createAction('[Home] Post Message Failure', props<{ error: HttpErrorResponse }>());