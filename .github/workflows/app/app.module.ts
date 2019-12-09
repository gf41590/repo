import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { Komunikat } from './komunikat';
import { KomunikatComponent } from './komunikat/komunikat.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponentComponent,
    KomunikatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
