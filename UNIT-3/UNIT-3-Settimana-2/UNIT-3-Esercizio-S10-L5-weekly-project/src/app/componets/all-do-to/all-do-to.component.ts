import { Component, OnInit } from '@angular/core';
import { Todo, User } from 'src/app/interface/db';
import { TodolistService } from 'src/app/service/todolist.service';

@Component({
  selector: 'app-all-do-to',
  templateUrl: './all-do-to.component.html',
  styleUrls: ['./all-do-to.component.css']
})
export class AllDoToComponent implements OnInit {
  arrayAllToDo: Todo[] = [];
  arrayUsers: User[] = [];
  filteredToDoList: Todo[]  = [];
  searchTerm: string = '';

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.getList();
    this.getUsers();
  }

  getList() {
    this.arrayAllToDo = this.todolistService.getList();
    this.filteredToDoList = [...this.arrayAllToDo];
  }

  getUsers() {
    this.arrayUsers = this.todolistService.getUsers();
  }

  getUserById(userId: number): string {
    return this.todolistService.getUserById(userId);
  }

  toggleCompletion(index: number): void {
    this.todolistService.toggleCompletion(index);
  }

  filterToDoList(searchTerm: string): void {
    this.filteredToDoList = this.arrayAllToDo.filter(todo =>
      todo.todo.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  }
}
