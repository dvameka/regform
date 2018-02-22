# Angular 5 Registration form

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


## Development steps - #1

* ng new <app name>
* Change directory to the app folder. <app name>
* npm install bootstrap express body-parser cors --save
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
        public contactNumber: string,
        public age: Number,
        public sgidNo: string
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
* Under the app.component.ts onSubmit implemented capturing logic as below and lastly toggle the isSubmitted flag to true display the submitted information on the template page.
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
        this.isSubmitted = true;
    }
```
```html
    <div class="row" *ngIf="isSubmitted">
        <div class="col-6" [ngStyle]="{'background-color':'grey'}">
                <div class="form-group">
                        <label >{{model.email}}</label> 
                </div>
                <div class="form-group">
                        <label >{{model.firstName}}</label> 
                </div>
                <div class="form-group">
                        <label >{{model.lastName}}</label> 
                </div>
                <div class="form-group">
                        <label >{{model.gender}}</label> 
                </div>
                <div class="form-group">
                        <label >{{model.address}}</label> 
                </div>    
                <div class="form-group">
                        <label >{{model.dateOfBirth}}</label> 
                </div>
                <div class="form-group">
                        <label >{{model.nationality}}</label> 
                </div>
                <div class="form-group">
                        <label >{{model.contactNumber}}</label> 
                </div>
                <div class="form-group">
                    <label >Age = {{model.age}}</label> 
            </div>
        </div>
    </div>
```
 * Add a trigger under the onChange function to handle the on change event for the nationalities drop down when Singaporean is selected. An input ID No. field is dynamically shown on page/template
```javascript
    onChange(event){
        console.log(event);
        if(event === this.nationalities[0].value){
            this.showSingaporeCitizenId = true;
        }
    }
```
* Incorporate the dynamic rendered ID No. field right after the nationality is selected as Singaporean (SG).
```html
 <div *ngIf="showSingaporeCitizenId" class="form-group">
    <label for="SGidNo">Singapore ID No.</label>
    
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">S</span>
        </div>
        <input id="SGidNo" name="SGidNo" type="text" #sgidNo="ngModel" class="form-control" [(ngModel)]="model.sgidNo"  value="{{ model.sgidNo}}" required/>
    </div>
    
    <div *ngIf="sgidNo.errors && (sgidNo.touched || isSubmitted)">
            <div [hidden]="!sgidNo.errors.required && sgidNo.dirty" class="help-block alert alert-danger">
                ID No. is required.
            </div>
    </div>
</div>
```
* Create a directory and app.js file under the project directory using visual studio code (server/app.js)
* Create server side app (Node JS + ExpressJS), import in express JS, CORS and body-parser
```javascript
/**
 * Server side app
 */

 console.log("Starting server side app ...");
 /* start : import libs */
 const express = require('express');
 var cors = require('cors')
 const bodyParser = require('body-parser');
/* end : import libs */
```
* Instantiate and configure ExpressJS for the backend server side app. The NODE_PORT variable is derived from the operating system environment variable.
```javascript
var app = express();
 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());
 app.use(cors());
 console.log(__dirname);
 const NODE_PORT = process.env.PORT;

 app.use(express.static(__dirname + "/../dist/"));

```
* Generate angular UI scripts by running ng build. If this is to deploy to cloud environment incorporate --aot and --prod argument.
```
ng build 
```
* Create an endpoint on the server side server/app.js
```javascript
app.post("/api/user/register", (req, res)=>{
    console.log(req);
    var user = req.body;
    console.log(user);
    user.age = 40;
    res.status(200).json(user);
 });
```
* Incorporate Express JS listening codes into the server/app.js
```javascript
app.listen(NODE_PORT, function(){
     console.log(`Backend Server started at ${NODE_PORT}`);
 })
```
* Run the server side app on your command prompt/terminal
```
# mac and linux
$ export PORT=4000
# windows 
$ set PORT=4000
$ nodemon server/app.js
```
# Development steps #2 
* The following update is to demonstrate how component communicate with one another using the @Input annotation
* Generate a product review class
```bash
ng g class shared/product-review
```
* Define all the attributes for the product review class. rating is number, by is string normally is the person who review the product, comment/remarks given by the reviewer, thumbsUp by other reader. Lastly verification flag from the platform owner. (product-review.ts)
```javascript
export class ProductReview {
    constructor(
        public rating: Number,
        public by: string,
        public comment: string,
        public thumbsUp: Number,
        public isVerifiedPurchase: boolean
    ){

    }
}
```
* The product review component is going to reuse the user registration service with a new function that perform a GET All reviews from the backend server. (user-registratio.service.ts)
```javascript
public getAllReviews(){
    return this.httpClient.get<ProductReview[]>(this.productAPIURL + 'reviews', httpOptions);

```
* Under the app.component.ts define an array list as below where data type is any or we can be specific as ProductReview[]
```javascript
reviews: any;
```
* Add an initialization get product reviews codes under the ngOnInit function
```javascript
this.userService.getAllReviews()
      .subscribe(result => {
        this.reviews = result;
      })
```
* On the app.component.htmll page after the submit button add the following selector. The reviews array is pass into the product review component by assigning the app.component.ts class variable to the @Input annotation of the child component.
```javascript
<app-product-review [reviewsProduct] = "reviews">
                </app-product-review>
```
* Generate the product review component
```
ng g component product-review 
```
* Edit the product review component ts declare the @Input annonation for the product review arrays that derived from the parent component
```javascript
import { Component, Input, OnInit } from '@angular/core';
import { ProductReview } from '../shared/product-review';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Input() reviewsProduct: ProductReview[];
  title :string = "Reviews"
  constructor() { }

  ngOnInit() {
  }
}
```
* On the product review template loop the reviews array and render the display.
```html
<div class="row">
    <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12">
        <h1>{{title}}</h1>
    </div>
</div> 
<hr/>  
<div *ngFor="let review of reviewsProduct" >
<div>
    Rating : {{review.rating}}
</div>
<div>
    by {{review.by}}
</div>
<div>
    Review >>> :  {{review.comment}}
</div>
<br>
</div>
```