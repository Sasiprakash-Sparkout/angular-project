import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { FarmDashboard } from './farm-dashboard/farm-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,FarmDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('farm-management-system');
}
