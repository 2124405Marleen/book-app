import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.scss']
})
export class AddNewDataComponent implements OnInit {
  author = new FormControl('',
    [Validators.required,
      Validators.minLength(3),
      forbiddenNameValidator(/fuck/),
      forbiddenNameValidator(/kut/),
      forbiddenNameValidator(/penis/),
      forbiddenNameValidator(/sex/)
      ]);

  gender = new FormControl('',
    [Validators.required

    ]);
  public form: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
       name: this.author ,
       gender: this.gender
    });
  }


  ngOnInit(): void {
  }

  SaveAuthor(): void {

    if (this.form.valid){
      const author = this.form.value;
      console.log(author);
      this.http.post('http://localhost:3000/author', author).subscribe(rec => {
        console.log('great succes');
        console.log(rec);
      });
    }
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
