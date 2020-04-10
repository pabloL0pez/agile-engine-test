export class DatamuseService {
    private url: string = 'https://api.datamuse.com/';

    constructor(){}

    getSynonyms(word: string) {
        // return this.http.get(`${this.url}/words?rel_syn=${word}`);
    }
}