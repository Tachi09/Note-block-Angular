import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes = NOTES;
  selectedNote?: Note;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }
}

