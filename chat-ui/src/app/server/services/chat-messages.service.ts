import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message';
import { environment } from '../../../environments/environment';
import { HubConnectionBuilder } from '@microsoft/signalr';

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
  
  public listenToMessages(): Observable<ChatMessage> {
    return new Observable<ChatMessage>(observer => {
      const hubConnection = new HubConnectionBuilder()
        .withUrl(`${environment.apiUrl}chat-hub`, {withCredentials: false})
        .build();
        hubConnection.on("ReceiveMessage", (data: ChatMessage) => {
          console.log(data);
          observer.next(data);
        });
        hubConnection.start()
          .then(() => console.log('connection started'))
          .catch((err) => console.log('error while establishing signalr connection: ' + err));
        return () => {
          hubConnection.stop();
        }
    });
  }
}
