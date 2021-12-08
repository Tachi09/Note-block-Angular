import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { NewNoteFormComponent } from './new-note-form/new-note-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteDetailComponent,
    MessagesComponent,
    NewNoteFormComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
