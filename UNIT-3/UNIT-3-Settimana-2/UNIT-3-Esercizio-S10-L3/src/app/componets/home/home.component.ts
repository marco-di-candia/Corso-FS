import { Component, OnInit, Input } from '@angular/core';
import { Products, ProductListResponse, CartItem } from 'src/app/models/products.interface';
import { ProdutServiceService } from 'src/app/service/produt-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input() product!: Products
  cart: CartItem[] = []
  favs: Products[] = []
  arrayProduct: Products[] = [];
  sub!: Subscription;

  constructor(private productService: ProdutServiceService) { }

  //GET * PRODS
  ngOnInit(): void {
    this.sub = this.productService.getProduts().subscribe(
      (response: Products[] | ProductListResponse) => {
        this.arrayProduct = Array.isArray(response) ? response : response.products;
        console.log('Dati ricevuti:', this.arrayProduct);
      },
      error => console.log(error)
    );
  }

  addToCart(prd: Products) {
    this.productService.addToCart(prd)
  }

  addToFavs(prd: Products) {
    this.productService.addToFavs(prd)
  }
  isFav(id: number) {
    return this.productService.isFav(id)
  }


}
