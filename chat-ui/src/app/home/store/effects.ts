import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ChatMessagesService } from "../../server/services/chat-messages.service";
import { switchMap, map, catchError, of } from "rxjs";
import { loadMessages, loadMessagesSuccess, loadMessagesFailure, postMessage, postMessageSuccess, postMessageFailure } from "./actions";
import { Injectable } from "@angular/core";

@Injectable()
export class ChatMessagesEffects {
    public loadMessages = createEffect(() => this.actions.pipe(
        ofType(loadMessages),
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

    public reloadMessagesOnPost = createEffect(() => this.actions.pipe(
        ofType(postMessageSuccess),
        map(() => loadMessages())
    ));

    public constructor(
        private readonly actions: Actions,
        private readonly chatService: ChatMessagesService
    ) { }
}