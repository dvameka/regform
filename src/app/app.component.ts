import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from './shared/registration-user';
import { UserRegistrationService } from './services/user-registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  model = null;
  gender: string[] = ['M', 'F'];
  
  nationalities = [ {desc:'Singapore', value:'SG'}, 
                    {desc: 'Malaysia', value:'MY'}, 
                    {desc:'Thailand', value:'TH'},  
                    {desc:'Vietnam', value: 'VN'}];
                    
  isSubmitted: boolean = false;
  result: string = "";
  reviews: any;

  constructor(private userService: UserRegistrationService){

  }
  
  // when the page load
  ngOnInit() {
    this.model = new RegistrationUser('','','','','','',null,'','MY','', 0);
    this.userService.getAllReviews()
      .subscribe(result => {
        this.reviews = result;
      })
  }
  
  // this is to handle when I click on a submit or save button.
  onSubmit(){
    console.log(this.model.email);
    console.log(this.model.password);
    console.log(this.model.confirmPassword);
    console.log(this.model.firstName);
    console.log(this.model.lastName);
    console.log(this.model.gender);
    console.log(this.model.dateOfBirth);
    console.log(this.model.address);
    console.log(this.model.nationality);
    console.log(this.model.contactNumber);
    this.userService.saveUserRegistration(this.model)
      .subscribe(user => {
        console.log('send to backend !');
        console.log(user);
        this.model = user;
      })
    this.isSubmitted = true;
  }

  onChange(event){
    // empty function.
  }
}
