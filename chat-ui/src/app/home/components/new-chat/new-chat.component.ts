import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatMessage } from '../../../server/models/chat-message';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrl: './new-chat.component.scss'
})
export class NewChatComponent {
  public formGroup = this.fb.group({
    userName: ['', Validators.required],
    message: ['', Validators.required]
  });

  @Output()
  public chatMessageSubmit = new EventEmitter<ChatMessage>();

  public constructor(private readonly fb: FormBuilder) { }

  public onSubmit(): void {
    if (this.formGroup.valid) {
      const userName = this.formGroup.value.userName!;
      const message = this.formGroup.value.message!;
      this.chatMessageSubmit.emit({ userName, message});
      this.formGroup.reset({userName});
    }
  }
}
