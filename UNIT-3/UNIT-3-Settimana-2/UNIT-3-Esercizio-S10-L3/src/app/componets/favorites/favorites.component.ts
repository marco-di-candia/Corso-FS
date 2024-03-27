import { Component } from '@angular/core';
import { Products } from 'src/app/models/products.interface';
import { ProdutServiceService } from 'src/app/service/produt-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favs!: Products[]
  constructor(public prdSrv: ProdutServiceService) { }

  ngOnInit(): void {
    this.prdSrv.getFavList().subscribe((favs: Products[]) => {
      this.favs = favs
    })
  }
  removeFromFav(id: number) {
    this.prdSrv.removeFromFav(id)
  }
}
