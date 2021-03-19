import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexperience',
  templateUrl: './addexperience.component.html',
  styleUrls: ['./addexperience.component.css']
})
export class AddexperienceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  model:any=[];

  getvalues(f:NgForm)
  {
   this.router.navigateByUrl('/dashboard1');
  }

  getvalues1(){
     this.router.navigateByUrl('/dashboard1');

  }

}
