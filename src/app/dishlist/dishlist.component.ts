import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.css']
})
export class DishlistComponent implements OnInit {
  alldishes:any=[]

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {

    this.service.getAllDishes().then(res=>res.json()).then(data=>{
      this.alldishes=data
    });
  }
  redirectToDishDetails(id:number){
    console.log(id);
    this.router.navigate(["dishdetails/",id])
    

  }
  redirectToReview(id:number){
    this.router.navigate(["dishes/review/",id])

  }

}
