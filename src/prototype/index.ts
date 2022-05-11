import PersonPrototype from './PersonPrototype.js';

export default () => {
  const user1 = new PersonPrototype();

  user1.setFirstName('Denis');
  user1.setAdmin(false);

  const user2 = user1.clone();
  const user3 = user2;

  console.log('User1:', user1);
  console.log('User2:', user2);
  console.log('User3:', user3);

  console.log(user1 === user2);
  console.log(user2 === user3);
  console.log(user1.firstName === user2.firstName);
}
