import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const notes = [
    {id:1, name: 'pzn č.1', text: 'test1', creation_date: 'January 4, 2019 10:13:00', edit_date: ''},
    {id:2, name: 'pzn č.2', text: 'test2', creation_date: 'February 7, 2017 10:13:00', edit_date: ''},
    {id:3, name: 'pzn č.3', text: 'test3', creation_date: 'March 25, 2015 10:13:00', edit_date: ''},
    {id:4, name: 'pzn č.4', text: 'test4', creation_date: 'April 1, 2013 10:13:00', edit_date: ''},
    {id:5, name: 'pzn č.5', text: 'test5', creation_date: 'August 20, 2011 10:13:00', edit_date: ''},
    {id:6, name: 'pzn č.6', text: 'test6', creation_date: 'December 24, 2010 10:13:00', edit_date: ''},
    ];
    return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
