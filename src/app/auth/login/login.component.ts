import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  constructor(private fb: FormBuilder) {}

  @Output() activate = new EventEmitter<boolean>();

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit(){
    var loginDetails = this.loginForm.value;
    if(loginDetails.email === 'admin' && loginDetails.password === 'admin'){
      console.log("admin logged in successfully");
      
      this.activate.emit(true);
    }
    else{      this.activate.emit(false);

      
      console.log("User Logged in Successfully");
      this.activate.emit(false);
    }
  }

}
