import { Component, OnInit } from '@angular/core';
import { GetCatagorysService } from '../../get-catagorys.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

// I import Location so that I can query the current path
import { Location } from '@angular/common';
// I also import Router so that I can subscribe to events
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private categorynameobj:string;

  constructor( private getCatagoryName: GetCatagorysService, location: Location, router: Router ) { 
    // router.events.subscribe(data => console.log(data));


  }

  ngOnInit() {

    this.getCatagoryName.getCategoryNames().subscribe((resObj) => {
      // typeof resobj
      // console.log('-------@@------ typeof resObj')
      // console.dir(typeof resObj);
      // value of resobj
      // console.log('-------@@------ resObj')
      // console.dir(resObj);

      let res:any = resObj;
      let response = JSON.parse(res._body);
      // console.log('-------@@------ response')
      // console.dir(response);

      this.categorynameobj = response.data;
     // let response = JSON.parse(resObj._body);


     
    });

  }

}
