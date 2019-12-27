import { Component } from "@angular/core";

@Component({
  selector: "app-fyle",
  templateUrl: "./fyle.component.html",
  styleUrls: ["./fyle.component.css"]
})
export class FyleComponent {
  constructor() {}

  numberServing: number;
  offer: boolean = true;
  lollipopPrice: number;
  lollipopPriceOffer: number;
  icecandyPrice: number;
  icecandyPriceOffer: number;
  priceDiff: number;
  offer1: any;

  changeCardVal(val) {
    this.numberServing = val;
    this.lollipopPrice = val;
    this.lollipopPriceOffer = val / 2;
    this.icecandyPrice = this.lollipopPrice * 2;
    this.icecandyPriceOffer = this.icecandyPrice / 2;
    this.priceDiff = this.icecandyPrice - this.lollipopPrice;

    if (!this.offer) {
      this.lollipopPrice = this.lollipopPriceOffer;
      this.icecandyPrice = this.icecandyPriceOffer;
      this.priceDiff = this.icecandyPrice - this.lollipopPrice;
    }
  }

  applyOffer() {
    this.offer = !this.offer;
    this.changeCardVal(this.numberServing);
  }
}
