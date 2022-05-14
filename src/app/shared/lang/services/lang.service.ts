import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private http: HttpClient) { }

  public getLabels(lang: string): Observable<Object> {
    return this.http.get("assets/i18n/" + lang + ".json");
  }
}
