"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var john = new person_1.default("John", 40);
var mary = new person_1.default("Mary", 35);
john.tellMyName();
john.tellMyAge();
mary.tellMyName();
mary.tellMyAge();
