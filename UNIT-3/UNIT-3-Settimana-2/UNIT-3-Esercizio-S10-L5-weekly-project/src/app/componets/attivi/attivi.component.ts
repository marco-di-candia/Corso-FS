import { Component } from '@angular/core';
import { Todo, User } from 'src/app/interface/db';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-attivi',
  templateUrl: './attivi.component.html',
  styleUrls: ['./attivi.component.css']
})
export class AttiviComponent {
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
  hasTasks(user: any): boolean {
    return this.arrayAllToDo.some(item => item.userId === user.id);
  }
}
