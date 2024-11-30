import { Component } from '@angular/core'; // import component from angular core

// my components
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';

// data
import { DUMMY_USERS } from './dumy-users';

// root component
@Component({
  selector: 'app-root', // selector is used to call the component in the html file
  imports: [ HeaderComponent, UserComponent, TasksComponent], // imports the components,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'my-first-angular-project';

  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId); // find() is built-in js function  // ! - exclamation to ignore error
    // - user - represents each element we go through and on the right user.id is condition and if there is match, it returns user

  }

  onSelectUser(id: string) {
    console.log('Selected user: ' + id);
    this.selectedUserId = id;
  }
  
}


