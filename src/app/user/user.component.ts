import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { ComponentFixture } from '@angular/core/testing';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { User } from '../types/UserType';

const randomIndex = (): number => (
  Math.floor(Math.random() * DUMMY_USERS.length)
)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({ required: true }) user!:User
  @Output() selectedUser = new EventEmitter<string>()

  get imagePath() {
    return 'img/users/' + this.user.avatar
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id)
  }
}
