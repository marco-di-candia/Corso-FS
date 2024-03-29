import { Component } from '@angular/core';
import { Todo, User } from 'src/app/interface/db';
import { TodolistService } from 'src/app/service/todolist.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  arrayAllToDo: Todo[] = [];
  arrayUsers: User[] = [];

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getList();
    this.getUsers();
  }

  getList() {
    this.arrayAllToDo = this.todolistService.getList();
  }

  getUsers() {
    this.arrayUsers = this.todolistService.getUsers();
  }
  getUserById(userId: number): string {
    return this.todolistService.getUserById(userId);
  }
  toggleCompletion(index: number): void {
    const todo = this.arrayAllToDo[index];
    todo.completed = !todo.completed;
  }
}
