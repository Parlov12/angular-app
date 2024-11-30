import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() name?: string; // ? - it is fine if there isn't value 
  // @Input() name: string | undefined; // or we can set up that value can be either [type] or undefined
}
