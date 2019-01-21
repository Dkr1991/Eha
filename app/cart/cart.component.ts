import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productaArr = [];
  cartTotal:number = 0 ;
  constructor() { }

  ngOnInit() {
   this.getSelectedProducts();
   
  }

  getSelectedProducts(){
   
    let arrofobj =JSON.parse(sessionStorage.getItem('DB'));

    this.productaArr = arrofobj;

    for(let i = 0; i < this.productaArr.length; i++ ){
     this.cartTotal += this.productaArr[i].finalprice;
    }


  }

  remove(productId){
    for(let i = 0; i < this.productaArr.length; i++ ){
      if(this.productaArr[i].productId == productId ){
        this.productaArr.splice(i,1);
        sessionStorage.setItem('DB', JSON.stringify( this.productaArr));
      }

    }


  }

  incriment(productId){
      console.log()
      for(let i = 0; i < this.productaArr.length; i++ ){
        if(this.productaArr[i].productId == productId && this.productaArr[i].quantity >= 1  ){
          let price = this.productaArr[i].price - ((this.productaArr[i].discount/100) * this.productaArr[i].price);
          this.productaArr[i].finalprice += price;
          this.productaArr[i].quantity += 1;
          this.cartTotal +=price;
      }
      



  }
}

  decrement(productId){
      console.log()
      console.log()
      for(let i = 0; i < this.productaArr.length; i++ ){
        if(this.productaArr[i].productId == productId && this.productaArr[i].quantity > 1 ){
          let price = this.productaArr[i].price - ((this.productaArr[i].discount/100) * this.productaArr[i].price);
          this.productaArr[i].finalprice -= price;
          this.productaArr[i].quantity -= 1;
          this.cartTotal -=price;
      }
      



  }
  }


  

}
