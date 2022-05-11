import PersonBuilder from "./Builder.js";

export default () => {
  const personBuilder = new PersonBuilder();

  console.log("BUILDER PATTERN");
  
  personBuilder.setFirstName("Denis");
  personBuilder.setLastName("Redko");
  personBuilder.setGender("M");
  personBuilder.setAge(22);
  personBuilder.setAddress('Internet');
  personBuilder.setCountry('Blue Eyes Crying in the Rain');
  personBuilder.setAdmin(false);
  console.log(personBuilder.build());

  console.log(personBuilder, "\n");
};
