import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import reducer from './store/reducers';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { provideEffects } from '@ngrx/effects';
import { ChatMessagesEffects } from './store/effects';

const routes: Routes = [{
  path: '',
  providers: [
    // alternative to `StoreModule.forFeature`
    provideState('chat-messages',  reducer),
    // alternative to `EffectsModule.forFeature`
    provideEffects([ChatMessagesEffects]),
  ],
  component: ChatListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
