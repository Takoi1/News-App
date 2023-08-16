import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = 'cc663d436b654b139182619eabe98efd';
  constructor(private http: HttpClient) { }


  initSources() {
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=cc663d436b654b139182619eabe98efd');
  }


  initArticles() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cc663d436b654b139182619eabe98efd' );
  }

  getArticlesByID(source: String) {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=cc663d436b654b139182619eabe98efd' );
  }

}