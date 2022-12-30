import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstname:'',
      lastname:'',
      dob:'',
      email: '',
      password: '',
      salutation:''
    });
  }

  onSubmit(){
    console.log(this.regForm.value);
    
  }

}
