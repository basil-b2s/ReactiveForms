import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  constructor(private formBuilder : FormBuilder){}

  userForm = this.formBuilder.group({
    firstName : ['', [Validators.required, Validators.maxLength(20)]],
    lastName : ['', [Validators.required, Validators.maxLength(20)]],
    middleName : ['', Validators.maxLength(20)],
    age : ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(10), Validators.max(50)]],
    gender : ['male', Validators.required],

    address : this.formBuilder.group({
      street : ['', [Validators.required, Validators.maxLength(20)]],
      landMark : ['', [Validators.required, Validators.maxLength(20)]],
      city : ['', [Validators.required, Validators.maxLength(20)]],
      state : ['', [Validators.required, Validators.maxLength(20)]],
      zip : ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(20)]],
      country : ['', [Validators.required, Validators.maxLength(20)]]
    }),
    hobbies : this.formBuilder.array([
      this.formBuilder.control('Cricket')
    ]) 
  });

    
  public get hobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  public addHobby(){
    this.hobbies.push(this.formBuilder.control(''));
  }

  public removeHobby(index: number){
    this.hobbies.removeAt(index);
  }

  public onSubmit(){

    console.log(this.userForm.value);
  }
}


