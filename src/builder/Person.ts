import PersonBuilder from "./Builder.js";

export default class Person {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  address: string;
  country: string;
  isAdmin: boolean;

  constructor(builder: PersonBuilder) {
    this.firstName = builder.firstName;
    this.lastName = builder.lastName;
    this.address = builder.address;
    this.gender = builder.gender;
    this.age = builder.age;
    this.country = builder.country;
    this.isAdmin = builder.isAdmin;
  }
}
