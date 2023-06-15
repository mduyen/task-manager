import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chucNang:string='';
  ganCN(cn:string=''){
    this.chucNang=cn;
    console.log(this.chucNang);
    
  }
  constructor( private auth:AuthService){}
  thoat(){ this.auth.thoat();  }

  daDangNhap() { return this.auth.daDangNhap()}


  
}
