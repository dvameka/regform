# Angular5 Registration form

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Development steps

* ng new <app name>
* Change directory to the app folder. <app name>
* npm install bootstrap --save
* Add bootstrap css and js into the .angular-cli.json

```javascript
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
      "scripts": [
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],
```
* Generate value object that holds all the user registration information 
```javascript
ng g class shared/registration-user

```
* Implement all the properties for the user registration form.
```javascript
export class RegistrationUser {
    constructor(
        public email: string,
        public password: string,
        public confirmPassword: string,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public dateOfBirth: Date,
        public address: string,
        public nationality: string,
        public contactNumber: string
    ){

    }
}
```
* Import formsModule from angular built in package. Inject it to the imports configuration. (app.module.ts)

```javascript
import { FormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    FormsModule
  ],
```
* under the app.component.ts define the initialization declaration for the  user registration model. Third last argument we need to default the nationalities list to SG and the fourth field is a date field therefore we have to init the value to null.

```javascript
model = new RegistrationUser('','','','','','',null,'','SG','');
```

* On the app.component.html we start defining all the form fields with bootstrap styling.
  * when define the form tag we need to declare the template variable #regForm
  * Associate the webform submission with a onSubmit function declare on the app.component.ts .
  * Disable the internal browser validation by tagging novalidate
  * when the form initially render which is yet to be submitted. the boolean flag is defaulted to false.
  * Bind email field with the model object email attribute and define the email variable against the form template variable. 
  * Bind password field with the model object password attribute and define the password variable against form the template variable. 
  * Bind confirm password field with the model object confirm password attribute and define the confirm password variable against form the template variable.
  * Bind first name field with the model object first name attribute and define the first name variable against form the template variable. 
  * Bind last name field with the model object last name attribute and define the last name variable against form the template variable. 
  * Bind gender field with the model object gender attribute and define the gender variable against form the template variable. The radio button values of the gender field is derived from the array declare in the app.component.ts .
  ```javascript
    gender: string[] = ['M', 'F'];
  ```
  * Bind the rest of the fields. Exception to that the nationalities select list require to an array (complex javascript objec) to be declare under the app.component.ts as below:-
  ```javascript
    nationalities = [ {desc:'Singapore', value:'SG'}, 
                    {desc: 'Malaysia', value:'MY'}, 
                    {desc:'Thailand', value:'TH'},  
                    {desc:'Vietnam', value: 'VN'}];
  ``` 
  
```html
<div class="container fluid">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
                <h1>User Registration</h1>
            </div>
        </div>
    
        <div class="row" *ngIf="!isSubmitted">
            <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
                <form #regForm="ngForm" (ngSubmit)="onSubmit()" novalidate>
                    <div class="form-group">
                        <div>
                            <label for="email">Email Address </label>
                        </div>
                        
                        <input id="email" #email="ngModel" name="email" type="text" [(ngModel)]="model.email" placeholder="you@domain.com" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <div>
                                <label for="password">Password</label>
                        </div>
                        <input id="password" #password="ngModel" name="password" type="password" [(ngModel)]="model.password" placeholder="something secret" class="form-control"/>           
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="confirmpassword">Confirm Password</label>
                        </div>
                        <input id="confirmpassword" #confirmpassword="ngModel" name="confirmpassword" [(ngModel)]="model.confirmPassword" type="password" placeholder="something secret"  class="form-control"/>
                                
                    </div>

                    <div class="form-group">
                        <div>
                            <label for="firstName">First Name </label>
                        </div>
                        <input id="firstName" #firstName="ngModel" name="firstName" type="text" [(ngModel)]="model.firstName" placeholder="Emily" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <div>
                            <label for="lastName">Last Name </label>
                        </div>
                        <input id="lastName" #lastName="ngModel" name="lastName" type="text" [(ngModel)]="model.lastName" placeholder="Tan" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label for="gender">Gender</label>
                        <br/>
                        <input name="gender" type="radio" [(ngModel)]="model.gender" value="{{gender[0]}}"/> Male
                        <br/>
                        <input name="gender" type="radio" [(ngModel)]="model.gender" value="{{gender[1]}}" /> Female
                    </div>
                    
                    <div class="form-group">
                        <label for="dob">Date of Birth</label>
                        <input id="dob" name="dob" type="date" #dateOfBirth="ngModel" class="form-control" [(ngModel)]="model.dateOfBirth"  value="{{ model.dateOfBirth}}"/>
                    </div>

                    <div class="form-group">
                            <label for="address">Address</label>
                            <textarea rows="4" cols="50" id="address" name="address" #address="ngModel" class="form-control" [(ngModel)]="model.address">
                            </textarea>
                    </div>

                    <div class="form-group">
                        <label for="nationality">Nationality</label>
                        <select class="form-control" #nationality="ngModel" id="nationality" [(ngModel)]="model.nationality" [ngModelOptions]="{standalone: true}" (ngModelChange)="onChange($event)">
                            <option *ngFor="let nationality of nationalities" [ngValue]="nationality.value">{{nationality.desc}}</option>
                        </select>
                        
                    </div>

                    <div class="form-group">
                        <label for="contactNumber">Contact Number</label>
                        <input id="contactNumber"  #contactNumber="ngModel" name="contactNumber" type="text" class="form-control"  [(ngModel)]="model.contactNumber"/>
                        
                    </div>

                    <div class="form-group">
                        <hr/>
                        <button type="submit" [disabled]="!regForm.form.valid" class="btn btn-success">Submit</button>
                        <button type="reset" class="btn btn-danger" (click)="regForm.reset()">Reset</button>
                    </div>
                </form>
    
            </div>
        </div>
        

        <div class="row" *ngIf="isSubmitted">
            {{result}}
        </div>
        
    </div>
```

* Add a submit button and reset button at the bottom of the contact number field. Implement event trigger on the reset button by invoking a built in reset function, angular framework automaitically will reset all binded fields.
```html
 <div class="form-group">
    <hr/>
    <button type="submit" [disabled]="!regForm.form.valid" class="btn btn-success">Submit</button>
    <button type="reset" class="btn btn-danger" (click)="regForm.reset()">Reset</button>
</div>
```
* Under the app.component.ts onSubmit implemented capturing logic as below and last toggle the flag to display the submitted information.
```javascript
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
        this.result = JSON.stringify(this.model);
        this.isSubmitted = true;
    }
```
```html
    <div class="row" *ngIf="isSubmitted">
        {{result}}
    </div>
```
 * Add an empty onChange function to handle the on change event for the nationalities drop down
```javascript
    onChange(event){

    }
``` 