import { Component } from '@angular/core';

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
  
}
