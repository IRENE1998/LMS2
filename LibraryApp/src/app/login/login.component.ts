import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute, RouterModule } from '@angular/router';

import { LoginDetailService } from '../shared/login-detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  toastr: any;
  

  constructor(public service:LoginDetailService, private router:Router) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  
  onSubmit(form:NgForm){
    for (let ld of this.service.list)
    {
    if(this.service.userName==ld.userName && this.service.password==ld.password)
         this.router.navigateByUrl('/book-details');
  
    else{
      alert('Invalid username or password');}
      }
    }
  }