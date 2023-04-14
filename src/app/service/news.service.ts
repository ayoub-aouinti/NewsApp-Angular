import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key="ca466841665544ec97a70424fb875b31";
constructor(private http : HttpClient) { }

initSources(){
  return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key)
}

}
