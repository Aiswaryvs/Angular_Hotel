import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string=""
  options:any={
  method:'GET',
  body:"",
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  }
  constructor() { }

getToken(data:any){
  this.url=`http://127.0.0.1:8000/api/v2/token`
  

 return fetch(this.url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
}
getAllDishes(){
  this.url=`http://127.0.0.1:8000/mdishes`
  this.options.method='GET'
  let token=localStorage.getItem("token")
  
  // fetch(this.url,this.options).then(res=>res.json()).then(data=>console.log(data));

  return fetch('http://127.0.0.1:8000/mdishes/', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':'Token '+token
  },
})
  
  
}
dishdetail(id:number){

let token=localStorage.getItem("token")

return fetch(`http://127.0.0.1:8000/mdishes/${id}/`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':'Token '+token
  },
})
}
dishreview(id:number){
  let token=localStorage.getItem("token")

return fetch(`http://127.0.0.1:8000/mdishes/${id}/get_reviews/`, {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':'Token '+token
  },
})
}
addReview(data:any,id:number){
  let token=localStorage.getItem("token")
  return fetch(`http://127.0.0.1:8000/mdishes/${id}/add_reviews/`, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization':'Token '+token

  },
})
}
}

