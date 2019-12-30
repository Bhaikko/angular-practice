import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ["Chris", "Anna"];
  forbiddenEmails = ["test@test.com"];

  ngOnInit () {
    // form should be initialised before rendering
    this.signupForm = new FormGroup({
      // controls for form
      // nested form is possible
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmail]),
      }),
      'gender': new FormControl('male' /* Default Value */),
      'hobbies': new FormArray([])
    });

    
  }

  onSubmit () {
    console.log(this.signupForm);
  }

  onAddHobby () {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // synchronous validator
  forbiddenName = (control: FormControl): {[s: string]: boolean} => {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {
        'nameIsForbidden': true
      }
    }
    
    // returning valid for formcontrol
    return null;
  }

  // asynchronous validator
  forbiddenEmail = (control: FormControl): Promise<any> | Observable<any> => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenEmails.indexOf(control.value) !== -1) {
          resolve({
            'emailIsForbidden': true 
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }
    

}
