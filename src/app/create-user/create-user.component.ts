import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

   createUser = this.fb.group({
     username:["",Validators.required],
     age:["", [Validators.required,Validators.min(21),Validators.min(63)]],
     firstName:["",Validators.required],
     lastName:[""]
   })

   submit(){
     console.log(this.createUser.value);
   }

}
