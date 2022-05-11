import Person from "../builder/Person.js";

interface IPrototype {
  clone: () => Person;
}

export default class PersonPrototype implements IPrototype {
  firstName = "";
  lastName = "";
  gender = "";
  age = 0;
  address = "";
  country = "";
  isAdmin = false;

  constructor() {}

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  setGender(gender: string) {
    this.gender = gender;
  }

  setAge(age: number) {
    this.age = age;
  }

  setAddress(address: string) {
    this.address = address;
  }

  setCountry(country: string) {
    this.country = country;
  }

  setAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

  getAllValues() {
    return this;
  }

  clone(): PersonPrototype {
    return Object.assign({}, this);
  }
}
