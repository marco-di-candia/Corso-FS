import { Component, OnInit } from '@angular/core';
import { CartItem, Products } from 'src/app/models/products.interface';
import { ProdutServiceService } from 'src/app/service/produt-service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cartList!: CartItem[]
  total!: number
  constructor(private prdSrv: ProdutServiceService) { }
  get totalPrice() {
    return this.cartList.reduce((a, b) => a + b.totalPrice, 0)
  }
  deleteFromCart(id: number) {
    this.prdSrv.removeFromCart(id)
  }
  ngOnInit(): void {
    this.prdSrv.getCartList().subscribe(cart => this.cartList = cart)
  }


}

