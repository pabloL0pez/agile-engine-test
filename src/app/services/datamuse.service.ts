import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DatamuseService {
    private url: string = 'https://api.datamuse.com/';

    constructor(private http: HttpClient){}

    getSynonyms(word: string): Observable<any> {
        return this.http.get(`${this.url}/words?rel_syn=${word}`);
    }
}