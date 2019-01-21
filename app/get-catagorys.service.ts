import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class GetCatagorysService {

  // http header 
  private header = new Headers({'Content-Type':'application/json '});


  // inject the http instence
  constructor(private http:Http) {
   
   }

   getCategoryNames(){
    let url='http://localhost:8086/v1/category/all';
    let res = this.http.get(url,{ headers: this.header}).map(data => {
      // console.log(`#mapdata ${data}`);
      return data;
    } );
    
    // console.log(`#res ${JSON.stringify(res)}`);
    return res;
     
   }



}
