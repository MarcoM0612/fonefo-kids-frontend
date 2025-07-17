import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServices } from '../../../services/auth-services';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, JsonPipe ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  userLogged!: any;   
  constructor( private authService: AuthServices, private router: Router){}

  ngOnInit() {
    this.authService.user$.subscribe( userLogged => {
      this.userLogged = userLogged;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('home') // esta ruta debe existir
  }
}
