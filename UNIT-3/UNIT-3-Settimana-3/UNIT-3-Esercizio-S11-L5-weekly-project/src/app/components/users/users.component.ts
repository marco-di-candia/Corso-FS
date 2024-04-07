import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service'; // Importa il servizio UsersService
import { UserInterface } from '../../interface/user-interface'; // Importa l'interfaccia UserInterface

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[] = []; // Array che conterrà gli utenti

  constructor(private service: UsersService) { } // Inietta il servizio UsersService

  ngOnInit(): void {
    // Quando il componente viene inizializzato, ottiene la lista degli utenti dal servizio
    this.service.getUsers().subscribe((data) => {
      // Una volta ottenuti i dati, li assegna alla variabile 'users'
      this.users = data;
    });
  }
}
