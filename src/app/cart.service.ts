import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  item = [];
  constructor() {}
  addToCart(product) {
    this.item.push(product);
  }
}
