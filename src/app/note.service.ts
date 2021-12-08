import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './note';
import { NOTES } from './mock-notes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private noteUrl = 'api/notes';

  httpOption = {
    headers: new HttpHeaders({'Content-Type' : 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };

  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.noteUrl).pipe(
      tap(_ => this.log('fetched notes')),
      catchError(this.handleError<Note[]>('getNotes', []))
      );
  }

  getNote(id: number): Observable<Note> {
    const url = `${this.noteUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => this.log(`fetched note id=${id}`)),
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  } 

  updateNote(note : Note): Observable<any> {
    return this.http.put(this.noteUrl, note, this.httpOption).pipe(
      tap(_ => this.log(`updated note id=${note.id}`)),
      catchError(this.handleError<Note>(`updateNote`))
    );
  }

  addHero(note: Note): Observable<Note> {
    return this.http.post<Note>(this.noteUrl, note, this.httpOption).pipe(
      tap((newHero: Note) => this.log(`added new hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Note>('addNote'))
    );
  }

  deleteNote(id: number): Observable<Note> {
    const url = `${this.noteUrl}/${id}`;
    return this.http.delete<Note>(url, this.httpOption).pipe(
      tap(_ => this.log(`deleted note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }


private log(message: string) {
  this.messageService.add(`NoteService: ${message}`);
}
}
