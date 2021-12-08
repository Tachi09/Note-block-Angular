import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
  delete(note: Note): void{
    this.notes = this.notes.filter(h => h !== note);
    this.noteService.deleteNote(note.id).subscribe();
  }
}

