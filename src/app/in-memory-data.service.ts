import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const notes = [
    {id:1, name: 'pzn č.1', text: 'test1', creation_date: '1.1.2002', edit_date: 'none'},
    {id:2, name: 'pzn č.2', text: 'test2', creation_date: '2.1.2002', edit_date: 'none'},
    {id:3, name: 'pzn č.3', text: 'test3', creation_date: '3.1.2002', edit_date: 'none'},
    {id:4, name: 'pzn č.4', text: 'test4', creation_date: '4.1.2002', edit_date: 'none'},
    {id:5, name: 'pzn č.5', text: 'test5', creation_date: '5.1.2002', edit_date: 'none'},
    {id:6, name: 'pzn č.6', text: 'test6', creation_date: '6.1.2002', edit_date: 'none'},
    ];
    return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
