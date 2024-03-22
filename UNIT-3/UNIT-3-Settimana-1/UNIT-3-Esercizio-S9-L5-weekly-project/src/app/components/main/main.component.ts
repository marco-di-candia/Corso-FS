import { Component } from '@angular/core';
import { CarJson } from 'src/app/models/car-json.interface';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  carsJson: CarJson[] = [];
  selectedCars: CarJson[] = [];

  constructor() {
    this.getCars().then((carsJson) => {
      this.carsJson = carsJson;
      this.selectRandomCars(2);
    });
  }

  async getCars() {
    let response = await fetch('assets/db.json');
    let data = await response.json();
    return data;
  }

  selectRandomCars(count: number) {
    if (this.carsJson.length < count) {
      console.error('Non ci sono abbastanza auto nel database per generare le card.');
      return;
    }

    const availableCars = [...this.carsJson];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * availableCars.length);
      const selectedCar = availableCars.splice(randomIndex, 1)[0];
      this.selectedCars.push(selectedCar);
    }
  }


}
