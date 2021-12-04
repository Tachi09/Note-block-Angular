import { Component, OnInit } from '@angular/core';
import { Note_detail } from '../note-detail'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note_detail = {
    id : 1,
    name : 'Poznámka č. 1',
    text : 'Tohle je první poznámka, která tu vznikla a funguje jako test.',
    creation_date : '4.12.2021',
    edit_date : 'none'
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}

