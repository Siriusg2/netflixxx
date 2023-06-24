import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`);
  }
  post(url: string, payload: any) {
    return this.http.post(`${this.baseUrl}/${url}`, payload);
  }
  put(url: string, payload: any) {
    return this.http.put(`${this.baseUrl}/${url}`, payload);
  }
  delete(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`);
  }
}
