import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsSourcefinderService {
  private apiKey = 'pub_65839bb0e97c0cf394ffbdc249357721bcb77';
  private urlBase = 'https://newsdata.io/api/1/latest';

  constructor(private http: HttpClient) {}

  getLatestNews(countryCode: string): Observable<any> {
    const url = `${this.urlBase}?apikey=${this.apiKey}&country=${countryCode}`;
    return this.http.get(url);
  }
}
