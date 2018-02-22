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
