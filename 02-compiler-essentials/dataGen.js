const { faker } = require("@faker-js/faker");
function generatePerson() {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    let identity = { name: randomName, email: randomEmail };
    console.log(identity);
}
generatePerson();
export {};
//# sourceMappingURL=dataGen.js.map