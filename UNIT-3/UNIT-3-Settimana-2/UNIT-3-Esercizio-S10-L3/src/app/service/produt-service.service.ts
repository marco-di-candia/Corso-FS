import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products,CartItem,ProductListResponse } from '../models/products.interface';
import { Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutServiceService {
  apiURL = "https://dummyjson.com/products"

  cart: CartItem[] = []
  favs: Products[] = []
  
  constructor(private http:HttpClient) {}

 //GET * PRODS

  getProduts(){
    return this.http.get<Products[]>(this.apiURL)
  }

  //CARRELLO

  addToCart(prod: Products) {
    const found = this.cart.find(prd => prd.id === prod.id)
    if (found) {
      found!.amount += 1
      found.totalPrice = found.price * found.amount

    } else this.cart.push({ ...prod, amount: 1, totalPrice: prod.price })
  }
  removeFromCart(id: number) {
    const index = this.cart.findIndex(prd => prd.id === id)
    if(this.cart[index].amount === 1) {
      this.cart.splice(index, 1)
    } else {
      this.cart[index].amount--
      this.cart[index].totalPrice = this.cart[index].price * this.cart[index].amount
    }
  }
  getCartList() {
    return new Observable((obs: Observer<CartItem[]>) => {
      obs.next(this.cart)
    })
  }


  //FAVS

  addToFavs(prod: Products) {
    const found = this.favs.find(prd => prd.id === prod.id)
    if (!found) {
      this.favs.push(prod)
    }
  }

  removeFromFav(id: number) {
    const index = this.favs.findIndex(el => el.id === id)
    this.favs.splice(index, 1)
  }

  getFavList(){
    return new Observable((obs: Observer<Products[]>) => {
      obs.next(this.favs)
    })

  }

  isFav(id: number) {
    return this.favs.find(prd => prd.id === id)
  }

}
