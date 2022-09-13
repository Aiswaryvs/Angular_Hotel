import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.css']
})
export class DishdetailsComponent implements OnInit {
  id:number=0
  details:any
  reviews:any=[] 
  constructor(private service:AuthService,private router:ActivatedRoute) {

    this.router.params.subscribe(p=>this.id=p["id"]);
    
    
    
   }

  ngOnInit(): void {
    console.log(this.id);
    this.service.dishdetail(this.id).then(res=>res.json()).then(data=>this.details=data);
    this.service.dishreview(this.id).then(res=>res.json()).then(data=>console.log(data));
    
  }

}
