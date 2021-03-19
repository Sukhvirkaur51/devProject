import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addeducation',
  templateUrl: './addeducation.component.html',
  styleUrls: ['./addeducation.component.css']
})
export class AddeducationComponent implements OnInit {

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
