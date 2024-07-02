import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ChatMessagesService } from "../../server/services/chat-messages.service";
import { switchMap, map, catchError, of, tap, mergeMap } from "rxjs";
import { loadMessagesAndListen, loadMessagesSuccess, loadMessagesFailure, postMessage, postMessageSuccess, postMessageFailure, receiveMessage, receiveMessageError } from "./actions";
import { Injectable } from "@angular/core";

@Injectable()
export class ChatMessagesEffects {
    public loadMessages = createEffect(() => this.actions.pipe(
        ofType(loadMessagesAndListen),
        switchMap(() => this.chatService.get().pipe(
            map(messages => loadMessagesSuccess({ messages })),
            catchError(error => of(loadMessagesFailure({ error })))
        ))
    ));

    public postMessage = createEffect(() => this.actions.pipe(
        ofType(postMessage),
        switchMap(({ message }) => this.chatService.post(message).pipe(
            map((id) => postMessageSuccess({ id })),
            catchError(error => of(postMessageFailure({ error })))
        ))
    ));

    public listenToMessages = createEffect(() => this.actions.pipe(
        ofType(loadMessagesSuccess),
        switchMap(() => this.chatService.listenToMessages().pipe(
            map(message => receiveMessage({ message })),
            catchError(error => of(receiveMessageError({ error })))
        ))
    ));

    // public reloadMessagesOnPost = createEffect(() => this.actions.pipe(
    //     ofType(postMessageSuccess),
    //     switchMap(() => this.chatService.get().pipe(
    //         map(messages => loadMessagesSuccess({ messages })),
    //         catchError(error => of(loadMessagesFailure({ error })))
    //     ))
    // ));

    public constructor(
        private readonly actions: Actions,
        private readonly chatService: ChatMessagesService
    ) { }
}