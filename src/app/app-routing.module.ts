import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component'; 
import { NewNoteFormComponent } from './new-note-form/new-note-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full'},
  { path: 'notes', component: NoteComponent },
  { path: 'detail/:id', component: NoteDetailComponent },
  { path: 'new-note', component: NewNoteFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
