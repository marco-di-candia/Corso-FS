import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
