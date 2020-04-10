import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { DatamuseService } from '../services/datamuse.service';
import { FormatService } from '../services/format-service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  text$: Promise<string>;

  constructor(
    private textService: TextService,
    private formatService: FormatService,
    ) {
  }

  ngOnInit() {
    this.text$ = this.textService.getMockText();
  }

  shareSelection() {
    var sel = (window.getSelection && window.getSelection().toString()).trim();
    this.formatService.changeSelection(sel);
  }
}