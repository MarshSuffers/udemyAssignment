"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { faker } = require("@faker-js/faker");
function generatePerson() {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    let identity = { name: randomName, email: randomEmail };
    console.log(identity);
}
generatePerson();
//# sourceMappingURL=dataGen.js.map