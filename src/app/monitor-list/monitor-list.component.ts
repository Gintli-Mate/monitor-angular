import { Component, OnInit } from '@angular/core';
import { Monitor, MonitorService } from '../monitor.service';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css']
})
export class MonitorListComponent implements OnInit {
  monitors: Monitor[] = [];
  newMonitor: Monitor = {
    id: 0,
    brand: '',
    model: '',
    screen_size: 0,
    resolution: '',
    refresh_rate: 0,
    price: 0,
    type: '',
    availability: true
  };

  constructor(private monitorService: MonitorService) { }

  ngOnInit(): void {
    this.loadMonitors();
  }

  loadMonitors(): void {
    this.monitorService.getMonitors().subscribe(data => {
      this.monitors = data;
    });
  }

  addMonitor(): void {
    this.monitorService.addMonitor(this.newMonitor).subscribe(data => {
      this.monitors.push(data);
      this.newMonitor = {
        id: 0,
        brand: '',
        model: '',
        screen_size: 0,
        resolution: '',
        refresh_rate: 0,
        price: 0,
        type: '',
        availability: true
      };
    });
  }

  updateMonitor(monitor: Monitor): void {
    this.monitorService.updateMonitor(monitor).subscribe(() => {
      this.loadMonitors();
    });
  }

  deleteMonitor(id: number): void {
    this.monitorService.deleteMonitor(id).subscribe(() => {
      this.monitors = this.monitors.filter(m => m.id !== id);
    });
  }
}

