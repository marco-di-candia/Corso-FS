import { Component } from '@angular/core';
import { CarJson } from 'src/app/models/car-json.interface';
@Component({
  selector: 'app-brand-3',
  templateUrl: './brand-3.component.html',
  styleUrls: ['./brand-3.component.css']
})
export class Brand3Component {
  carsJson: CarJson[] = [];
  logo:[]=[]

  constructor() {
    this.getCars().then((carsJson) => {
      this.carsJson = carsJson;
    });
  }

  async getCars() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }
}
