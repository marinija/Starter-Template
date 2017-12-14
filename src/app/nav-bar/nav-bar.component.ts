import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /*registerBtn = function(){
    this.router.navigateByUrl('/register');
  };*/
  homeBtn(): void {
    this.router.navigateByUrl('/home');
  }
  registerBtn(): void {
    this.router.navigateByUrl('/register');
  }
  loginBtn(): void {
    this.router.navigateByUrl('/login');
  }

}
