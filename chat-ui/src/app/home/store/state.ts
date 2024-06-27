import { HttpErrorResponse } from "@angular/common/http";
import { ChatMessage } from "../../server/models/chat-message";

export interface HomeState {
    loading: boolean;
    chatMessages: ChatMessage[];
    error: HttpErrorResponse|null;
}