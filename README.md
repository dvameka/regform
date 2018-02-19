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

```
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],
      "scripts": [
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
      ],
```
* Generate value object that holds all the user registration information 
```
ng g class shared/registration-user

```
* Implement all the properties for the user registration form.
```
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

```
import { FormsModule } from '@angular/forms';
```
