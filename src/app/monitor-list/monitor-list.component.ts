
import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css'],
})
export class MonitorListComponent implements OnInit {
  monitors = [];

  constructor(private monitorService: MonitorService, private router: Router) {}

  ngOnInit(): void {
    this.monitorService.getMonitors().subscribe((data) => {
      this.monitors = data;
    });
  }

  deleteMonitor(id: number): void {
    this.monitorService.deleteMonitor(id).subscribe(() => {
      this.monitors = this.monitors.filter((monitor) => monitor.id !== id);
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/monitors', id]);
  }

  editMonitor(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
