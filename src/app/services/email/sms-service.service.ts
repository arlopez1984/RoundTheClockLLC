import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private apiUrl = 'http://localhost:3000/'; // Cambia esta URL cuando subas el backend

  constructor(private http: HttpClient) {}

  sendSMS(to: string, message: string) {    
    return this.http.post(`${this.apiUrl}/send-sms`, { to, body: message });
}
 
}
