import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';

import { MonitorService } from './monitor.service';
import { MonitorListComponent } from './monitor-list/monitor-list.component';
import { MonitorDetailsComponent } from './monitor-details/monitor-details.component';
import { MonitorFormComponent } from './monitor-form/monitor-form.component';

const routes: Routes = [
  { path: '', component: MonitorListComponent },
  { path: 'monitors/:id', component: MonitorDetailsComponent },
  { path: 'edit/:id', component: MonitorFormComponent },
  { path: 'add', component: MonitorFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MonitorListComponent,
    MonitorDetailsComponent,
    MonitorFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MonitorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
