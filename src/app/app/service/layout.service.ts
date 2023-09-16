import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const path = '/assets/data';
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private http: HttpClient) {}

  public getCategories(currentURL: string): Observable<any> {
    const loadJson = currentURL === 'software' ? 'software.json' : 'side-menu.json';
    return this.http.get(`${path}/${loadJson}`);
  }
}
