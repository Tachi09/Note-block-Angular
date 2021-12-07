import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  selectedNote?: Note;
  notes: Note[] = [];

  constructor(private noteService: NoteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  onSelect(note: Note): void{
    this.selectedNote = note;
    this.messageService.add(`NoteComponent: Selected note id=${note.id}`);
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
}

