import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private productObj;
  private productimg;
  private productID;


  constructor(private productservice: GetProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.getProductIdFromRouteURL();

    this.productObj = this.getProductsForCatagoryId(this.productID);
   

  

  }
  
  getProductIdFromRouteURL(){
    this.productID = this.route.snapshot.paramMap.get('id');
    // console.log('#pid');
    // console.dir(this.productID);
    // console.dir( typeof this.productID);

  }

  getProductsForCatagoryId( catagoryId ){
     
    this.productservice.getProductsByProductId(catagoryId).subscribe(resObj => {
      // console.log('#resObj');
      // console.log(resObj);

      let res:any = resObj;
      let response = JSON.parse(res._body);
      // console.log('-------@@------ response')
      // console.dir(response);

      this.productObj = response.data;

      // console.log( 'this.productsObj');
      // console.log( this.productObj);
      this.productimg = this.productObj.mainImageUrl;
    })
   
   }

   //add to cart 

   addToCart(){
   

  
    // IF DB is empty
    if(sessionStorage.getItem('DB') == null){
      
      let empArr =[];
      empArr.push(this.productObj);
      
      sessionStorage.setItem('DB', JSON.stringify(empArr));
    }

    //if db has some items
    else {
      
      
      let arrOfObj = JSON.parse(sessionStorage.getItem('DB'));

      
       const temp = JSON.parse(JSON.stringify(arrOfObj));

        for(let index = 0; index< temp.length; index++ ) {
          
            if(arrOfObj[index].productId == this.productObj.productId){
                    return;
            
            }
        }
          
          arrOfObj.push(this.productObj);
          sessionStorage.setItem('DB', JSON.stringify(arrOfObj));
          
        

    }

      
    }

    ngOnDestroy(){
      // console.log('##### ngOnDestroy app component');
      // localStorage.setItem('PRODUCTS', JSON.stringify(PRODUCTS));
  
    }


  
  


}
