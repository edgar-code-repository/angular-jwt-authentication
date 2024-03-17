import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submittedForm:any) {
    //console.log(submittedForm);

    if (submittedForm.invalid) {
      return false;
    }

    this.user.username = submittedForm.value.loginEmail;
    this.user.password = submittedForm.value.loginPassword;
  
    console.log(this.user.username);
    console.log(this.user.password);

    return true;
  }

  onClickBack() {
    this.errorMessage = "";
    this.blnLoginError = false;      
  }

}
