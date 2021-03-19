import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  model:any=[];

  getvalues(f:NgForm)
  {
 localStorage.setItem('user',f.value.username)
 this.router.navigateByUrl('/dashboard');
  }
}
