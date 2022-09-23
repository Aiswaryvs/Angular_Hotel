import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'; 
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form=new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)

  })
 
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
authenticate(){
  console.log(this.form.value);
  let data=this.form.value
  this.service.getToken(data).then(res=>res.json()).then(tk=>{
    localStorage.setItem("token",tk.token)
  })
  
  if("token" in localStorage){
    this.router.navigate(['dishes'])
    

  }

}
// get username(){
//   return this.form.get("username")
// }
}
