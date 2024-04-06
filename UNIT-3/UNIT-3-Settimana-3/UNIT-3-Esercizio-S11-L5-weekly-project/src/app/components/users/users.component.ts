import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { UserInterface } from '../../interface/user-interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:UserInterface [] = []

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.users  = data
    })
  }

}
