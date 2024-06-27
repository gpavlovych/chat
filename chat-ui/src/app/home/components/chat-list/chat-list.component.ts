import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMessages, postMessage } from '../../store/actions';
import { selectChatMessages } from '../../store/selectors';
import { ChatMessage } from '../../../server/models/chat-message';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent implements OnInit {
  public chatMessages$ = this.store.select(selectChatMessages);

  public constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(loadMessages());
  }

  public onChatMessageSubmit(message: ChatMessage): void {
    this.store.dispatch(postMessage({ message }));
  }
}
