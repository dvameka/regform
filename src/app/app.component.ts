import { Component, OnInit } from '@angular/core';
import { RegistrationUser } from './shared/registration-user'
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
  
  ngOnInit() {
    this.model = new RegistrationUser('','','','','','',null,'','MY','');
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
    this.isSubmitted = true;
  }

  onChange(event){
    // empty function.
  }
}
