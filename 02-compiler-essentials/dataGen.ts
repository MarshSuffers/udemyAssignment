const { faker } = require("@faker-js/faker");

type person = { name: string; email: string };

function generatePerson() {
  const randomName: string = faker.person.fullName();
  const randomEmail: string = faker.internet.email();

  let identity: person = { name: randomName, email: randomEmail };
  console.log(identity)
}

generatePerson();
