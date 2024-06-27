import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {
  public constructor(private readonly httpClient: HttpClient) { }

  public get(): Observable<ChatMessage[]> {
    return this.httpClient.get<ChatMessage[]>(`${environment.apiUrl}chat-messages`);
  }

  public post(chatMessage: ChatMessage): Observable<string> {
    return this.httpClient.post<string>(`${environment.apiUrl}chat-messages`, chatMessage);
  }
}
