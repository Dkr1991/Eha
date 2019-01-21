import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GetProductsService } from '../get-products.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private productsObj:any;
  private catagoryId :any;
  
  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private getproduct : GetProductsService,
    private router: Router
  ) {   

    router.events.subscribe(event =>{
      if(event instanceof NavigationEnd) {
      this.ngOnInit();
      }
      //NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized

    })

  
  }

  ngOnInit() {
    //get  catagoryid from the URL 
    this.getCatagoryIdFromRouteURL();
    //get list of products for that catagoryid
    //put it in  productsObj
   
   
    

    }

    getCatagoryIdFromRouteURL(){
      this.catagoryId = this.route.snapshot.paramMap.get('id');
      // console.log('#cid');
      // console.dir(this.catagoryId);
      // console.dir( typeof this.catagoryId);
      this.getProductsForCatagoryId(this.catagoryId);
    }

    getProductsForCatagoryId( catagoryId ){
     
     this.getproduct.getProductsByCatagoryId(catagoryId).subscribe(resObj => {
      //  console.log('#resObj');
      //  console.log(resObj);

       let res:any = resObj;
       let response = JSON.parse(res._body);
       // console.log('-------@@------ response')
       // console.dir(response);
 
       this.productsObj = response.data;

      //  console.log( 'this.productsObj');
      //  console.log( this.productsObj);

      
     })
    
    }



 

}
