import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DUMMY_USERS } from './dummy-users';
import { UserComponent } from "./user/user.component";
import { User } from './types/UserType';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-lesson';
 
  users = DUMMY_USERS
  selectedUserId?:string
  
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
