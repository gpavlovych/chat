import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
})
export class ServerModule { }
