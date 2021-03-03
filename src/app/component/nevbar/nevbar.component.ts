import { Component,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent {

  title = 'Angular Form';

  contactForm = new FormGroup({
    firstname: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$"),Validators.maxLength(50)]),
    lastname: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.maxLength(50)]),
    email:new FormControl('',[Validators.email,Validators.required, Validators.pattern("^[a-zA-Z]+@[a-zA-Z]+.com$")]),
    phn:new FormControl('',[Validators.required, Validators.pattern("[789][0-9]{9}"),Validators.maxLength(10), Validators.minLength(10)]),
    birthday:new FormControl('',[Validators.required]),
    website:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+@[a-zA-Z]+.com$")]),
    address:new FormGroup({
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required, Validators.maxLength(7)])
    })
  })

  get firstname() {
    return this.contactForm.get('firstname');
  }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phn() {
    return this.contactForm.get('phn');
  }

  get city() {
    return this.contactForm.get("address").get('city');
  }

  get street() {
    return this.contactForm.get("address").get('street');
  }

  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }

  get website() {
    return this.contactForm.get('website');
  }

  get birthday() {
    return this.contactForm.get('birthday');
  }

  cityList:city[] = [
    new city("1", "Kolkata"),
    new city('2', 'Howrah')
  ];

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
export class contact {
  firstname:string;
  lastname:string;
  email:string;
  phn:string;
  address: {
    city:string;
    street:string;
    pincode:string;
  }
  website:string;
  birthday:string;
}

export class city {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
