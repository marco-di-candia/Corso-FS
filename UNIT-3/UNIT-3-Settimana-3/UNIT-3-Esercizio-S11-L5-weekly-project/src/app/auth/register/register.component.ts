import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private authSrv: AuthServiceService, private router: Router) { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    try {
      this.authSrv.signup(form.value).subscribe();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
    }
  }

  isValidUrl(url: string): boolean {
    // Utilizza un'espressione regolare per verificare se l'URL è valido
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocollo
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Dominio
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // oppure indirizzo IP
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Porta e percorso
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Parametri della query
    '(\\#[-a-z\\d_]*)?$','i'); // Anchor hash
    return !!pattern.test(url);
  }


}
