import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from './language';
import { LanguageList } from './language-list';

@Injectable({
  providedIn: 'root'
})

export class LanguageTranslateService {
  private translateUrl = 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getTranslation(body:any){
    return this.http.post(this.translateUrl,body,this.httpOptions);
  }

  getLanguageList():Language[]{
    return LanguageList;
  }
}
