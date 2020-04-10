import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Synonym } from '../interfaces/synonym.interface';
import { FormatService } from '../services/format-service';
import { FormControl } from '@angular/forms';
import { DatamuseService } from '../services/datamuse.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {

  currentSelection: string = '';
  synonyms: Synonym[] = [];
  synonymFormControl: FormControl = new FormControl();

  constructor(private formatService: FormatService, private datamuseService: DatamuseService) {}

  ngOnInit() {
    this.formatService.currentSelection.subscribe(selection => {
      this.currentSelection = selection;
      if (this.currentSelection) {
        this.datamuseService.getSynonyms(this.currentSelection).subscribe(syns => {
          this.synonyms = syns;
        });
      } else {
        this.synonyms = [];
      }
    });

    this.synonymFormControl.valueChanges.subscribe(synonym => {
      if (window.getSelection) {
        let selection = window.getSelection();
        if (selection.rangeCount) {
            let range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(synonym+' '));
        }
      }
    });
  }

  formatText(command: string) {
    document.execCommand(command, false, null);
  }
}
