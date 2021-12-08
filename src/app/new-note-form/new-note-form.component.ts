import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note-form',
  templateUrl: './new-note-form.component.html',
  styleUrls: ['./new-note-form.component.css']
})
export class NewNoteFormComponent implements OnInit {

  notes: Note[] = [];
  constructor( 
    private noteService: NoteService,
    private location: Location
    ) { }

  add(name: string, text: string): void {
    name = name.trim();
    text = text.trim();
    if (!name) { return; }
    this.noteService.addHero({ name , text} as Note)
      .subscribe(note => {
        this.notes.push(note);
      });
  }

  goBack(): void{
    this.location.back();
  }

  ngOnInit(): void {
  }

}
