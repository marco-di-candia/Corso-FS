import { Component } from '@angular/core';
import { Todo, User } from 'src/app/interface/db';
import { TodolistService } from 'src/app/service/todolist.service';
@Component({
  selector: 'app-non-attivi',
  templateUrl: './non-attivi.component.html',
  styleUrls: ['./non-attivi.component.css']
})
export class NonAttiviComponent {
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
    return this.todolistService.toggleCompletion(index)
  }
}
