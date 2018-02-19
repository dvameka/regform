import { Component, OnInit } from '@angular/core';

import { RegistrationUser } from './shared/registration-user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  model = new RegistrationUser('','','','','',null,'','','');
  valuebeingTypedOnText: string = "";
  myname: string = "Kelvin Ph";
  greetings: string = "";
  text_colour: string = "";
  aboveAge:string = "Below age group!"

  // typescript class init
  constructor(){

  }
  // this is to handle when I click on a submit or save button.
  onSubmit(){
    console.log("Submit a form from the template");
  }

  // angular component initialization
  ngOnInit(){

  }

  keyPressUp(event){
    console.log(event);
    console.log(event.target.value);
    this.valuebeingTypedOnText  = event.target.value;
  }

  keyPress(event){
    console.log(" Key press being called ! ");
    console.log(event);
    console.log("from template > "  + this.myname);
  }

  onClickMe(){
    console.log('from button !');
  }

  checkAge(event){
    console.log(JSON.stringify(event));
    var ageInNumber = parseInt(event.target.value);
    console.log(">> " + ageInNumber);
    console.log(ageInNumber > 21);
    if(ageInNumber > 21){
      this.aboveAge = "Above age ! gratz !"
    }
  }

  sayGreetings(){
    this.greetings = "Gong xi fa Cai !";
    this.text_colour = "{'color':'red', 'font-size':'17px'}";
  }
}
