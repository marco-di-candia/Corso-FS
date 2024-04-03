import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private auth:AuthService,private route:Router){}


  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated;
  }

  logout(): void {
    this.auth.logout(); // Chiama il metodo logout del AuthService
    this.route.navigate(['/']); // Reindirizza l'utente alla pagina Home dopo il logout
  }
 
}
