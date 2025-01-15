import { Component, Input } from '@angular/core';
import { User } from '../types/UserType';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User

}
