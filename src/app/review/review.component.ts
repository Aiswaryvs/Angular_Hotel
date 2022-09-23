import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviewform=new FormGroup({
    
    rating:new FormControl(),
    comment:new FormControl()
    

  })
 id:number=0
  constructor(private service:AuthService,private router:ActivatedRoute) {
    this.router.params.subscribe(p=>this.id=p["id"])
   }

  ngOnInit(): void {
  }

  submitReview(){
    let data=this.reviewform.value
    console.log(this.id);
    return this.service.addReview(data,this.id).then(res=>res.json()).then(data=>alert("review submitted"))

    
    

  }

}
