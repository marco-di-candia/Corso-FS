import { Component } from '@angular/core';
import { CarJson } from 'src/app/models/car-json.interface';
@Component({
  selector: 'app-brand-2',
  templateUrl: './brand-2.component.html',
  styleUrls: ['./brand-2.component.css']
})
export class Brand2Component {
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
