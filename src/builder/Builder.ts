import Person from "./Person.js";

export default class PersonBuilder {
  firstName = "";
  lastName = "";
  gender = "";
  age = 0;
  address = "";
  country = "";
  isAdmin = false;

  constructor() {}

  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public setGender(gender: string) {
    this.gender = gender;
  }

  public setAge(age: number) {
    this.age = age;
  }

  public setAddress(address: string) {
    this.address = address;
  }

  public setCountry(country: string) {
    this.country = country;
  }

  public setAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  public build(): Person {
    return new Person(this);
  }

  public getAllValues() {
    return this;
  }
}
