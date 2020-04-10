import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FormatService {

    private selectionSource = new BehaviorSubject<string>(null);
    currentSelection = this.selectionSource.asObservable();

    constructor() {}

    changeSelection(selection: string) {
        this.selectionSource.next(selection);
    }
}