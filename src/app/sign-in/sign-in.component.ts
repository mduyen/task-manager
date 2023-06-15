import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as moment  from 'moment';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  constructor(
    private auth : AuthService,
    private router : Router,
  ) {}
  ngOnInit(): void { }
  xulyDN(data:any){    
    console.log(data, data.un , data.pw);
    this.auth.login( data.un, data.pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('oops', error);
        // this.router.navigateByUrl('/dangnhap');
        alert('Đăng nhập không thành công');
      }
    )
   }
   thoat(){ 
    this.auth.thoat();  
    }

  }
  // constructor( 
  //   private auth:AuthService, 
  //   private router: Router
  // ) { }
  // ngOnInit(): void { }
  // xulyDN(data:any){
  //   this.auth.login( data.un, data.pw).subscribe( ()=>{ 
  //        console.log("Đăng nhập thành công");
  //        this.router.navigateByUrl('/');
  //     }
  //   )
  //   }
  // xulyDN(data:any){    
  //   // console.log(data, data.un , data.pw);
  //   this.auth.login( data.un, data.pw).subscribe( 
  //     res =>{          
  //         var d = JSON.parse(res);
  //         console.log("Đăng nhập thành công ", res);          
  //         const expiresAt = moment().add(d.expiresIn,'second');
  //          localStorage.setItem('id_token', d.idToken);
  //          localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  //          this.router.navigateByUrl('/');
  //     },
  //     error => {
  //       console.log('oops', error);
  //       alert('loi');
  //       // this.router.navigateByUrl('');
  //     }
  //   )
  //  } //xulyDN
   
    
  // }
