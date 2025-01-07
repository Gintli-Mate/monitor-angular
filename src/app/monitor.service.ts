// src/app/monitor.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonitorService {
  private apiUrl = 'http://localhost:3000/monitors';

  constructor(private http: HttpClient) {}

  // Get all monitors
  getMonitors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Get a single monitor by id
  getMonitor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Add a new monitor
  addMonitor(monitor: any): Observable<any> {
    return this.http.post(this.apiUrl, monitor);
  }

  // Update an existing monitor
  updateMonitor(id: number, monitor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, monitor);
  }

  // Delete a monitor
  deleteMonitor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
