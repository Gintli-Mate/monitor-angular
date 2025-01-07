
import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monitor-details',
  templateUrl: './monitor-details.component.html',
  styleUrls: ['./monitor-details.component.css'],
})
export class MonitorDetailsComponent implements OnInit {
  monitor: any;

  constructor(
    private monitorService: MonitorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.monitorService.getMonitor(id).subscribe((data) => {
      this.monitor = data;
    });
  }
}
