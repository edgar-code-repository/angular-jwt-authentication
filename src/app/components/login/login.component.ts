import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  blnLoginError: boolean = false;
  errorMessage: string = "";

  user: User = {
    username: "",
    password: ""
  };  

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(submittedForm:any) {

    if (submittedForm.invalid) {
      return false;
    }

    this.user.username = submittedForm.value.loginEmail;
    this.user.password = submittedForm.value.loginPassword;
  
    console.log("Username:" + this.user.username);
    console.log("Password:" + this.user.password);

    const authenticationObservable = this.authenticationService.authenticate(this.user);
    authenticationObservable.subscribe({
      next: (response: any) => {
        console.log("[LoginComponent][Successful authentication!!!][user: " + response.username + "]");
        console.log("[LoginComponent][Successful authentication!!!][token: " + response.token + "]");

        //this.router.navigateByUrl("main");X
      },
      error: (error) => {
        console.log("[LoginComponent][Authentication failed!!!][Error status: " + error.status + "]");
        console.log("[LoginComponent][Authentication failed!!!][Error body code: " + error.error.code + "]");        
        console.log("[LoginComponent][Authentication failed!!!][Error body message: " + error.error.message + "]");        

        this.errorMessage = error.error.message;
        this.blnLoginError = true;        
      }
    });

    /*authenticationObservable.subscribe(
      (data: any) => {
        console.log("[LoginComponent][Successful authentication!!!][token: " + data.token + "]");

        this.router.navigateByUrl("main");
      },
      (error) => {
        console.log("[LoginComponent][Authentication failed!!!][Error status: " + error.status + "]");

        this.errorMessage = "Authentication failed!!!";
        this.blnLoginError = true;        
      }
    );*/    
    
    return true;
  }

  onClickBack() {
    this.errorMessage = "";
    this.blnLoginError = false;      
  }

}
