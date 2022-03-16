import { Component, OnInit } from '@angular/core';
import { LanguageTranslateService } from './language-translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  languageList: any;
  constructor(private languageTranslateService: LanguageTranslateService) { }

  ngOnInit(): void {
    this.languageList = this.languageTranslateService.getLanguageList();
  }

}
