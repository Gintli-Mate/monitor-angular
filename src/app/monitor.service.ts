import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// A monitorok típusa
export interface Monitor {
  id: number;
  brand: string;
  model: string;
  screen_size: number;
  resolution: string;
  refresh_rate: number;
  price: number;
  type: string;
  availability: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private apiUrl = 'assets/monitors.json'; // A JSON fájl helye

  constructor(private http: HttpClient) { }

  // Az összes monitor adat lekérése
  getMonitors(): Observable<Monitor[]> {
    return this.http.get<Monitor[]>(this.apiUrl);
  }

  // Új monitor hozzáadása
  addMonitor(monitor: Monitor): Observable<Monitor> {
    return this.http.post<Monitor>(this.apiUrl, monitor);
  }

  // Monitor frissítése
  updateMonitor(monitor: Monitor): Observable<Monitor> {
    return this.http.put<Monitor>(`${this.apiUrl}/${monitor.id}`, monitor);
  }

  // Monitor törlése
  deleteMonitor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

