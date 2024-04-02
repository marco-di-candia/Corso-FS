import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reattivi-from',
  templateUrl: './reattivi-from.component.html',
  styleUrls: ['./reattivi-from.component.css']
})
export class ReattiviFromComponent implements OnInit {
  reattiviForm!: FormGroup
  showPassword: boolean = false;

  ngOnInit(): void {
    this.reattiviForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      ConfermaPassword: new FormControl(null, [Validators.required, this.passwordsMatchValidator.bind(this)]),
      genere: new FormControl(),
      textarea: new FormControl(null),
      usename: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.reattiviForm);

  }
  passwordsMatchValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!this.reattiviForm) {
      return null; // Non fare nulla se reattiviForm non è definito
    }

    const password = this.reattiviForm.controls['password'].value;
    const confirmPassword = control.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
