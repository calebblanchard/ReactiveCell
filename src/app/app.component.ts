import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  post: any;
  cellNum = '';
  name = '';
  titleAlert = 'This field is required';
  cellNumAlert = 'You must enter a valid phone number'

  constructor(private fb: FormBuilder) {

      this.rForm = fb.group({
      'name' : [null, Validators.required],
      'cellNum' : [null, Validators.compose([Validators.required,
        Validators.pattern('^(\\+0?1\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$')])]
    });
  }

  addPost(post) {
    this.name = post.name;
    this.cellNum = post.cellNum;
  }
}
