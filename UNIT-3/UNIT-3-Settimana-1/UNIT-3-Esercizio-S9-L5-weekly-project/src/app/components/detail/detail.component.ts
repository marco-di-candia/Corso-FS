import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarJson } from 'src/app/models/car-json.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  carsJson!: CarJson | undefined;
  model!: string;

  constructor(private route: ActivatedRoute) {
    this.model = this.route.snapshot.params['model'];
    this.getCarDetails(this.model);
  }

  async getCarDetails(model: string): Promise<void> {
    const response = await fetch('assets/db.json');
    const carsJson: CarJson[] = await response.json();
    this.carsJson = carsJson.find(car => car.model === model);
  }
}