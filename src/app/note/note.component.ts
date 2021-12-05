import { Component, OnInit } from '@angular/core';
import { Note_detail } from '../note-detail';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes = NOTES;
  selectedNote?: Note_detail;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(note: Note_detail): void {
    this.selectedNote = note;
  }
}

