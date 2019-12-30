import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form', { static: false }) signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // for this, the whole value is required
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   }
    // });

    // this.signupForm.setValue({
    //   ...this.signupForm.value,
    //   userData: {
    //     ...this.signupForm.value.userData,
    //     username: suggestedName
    //   }
    // });

    // Best approach
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit (form: NgForm) {
  //   // console.log("Form Submitted");
  //   console.log(form);
  // }

  onSubmit () {
    // another way of accessing form
    // console.log(this.signupForm);
    // console.log(this.signupForm.value);
  }
  
}
