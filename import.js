//import dalam js

//example 1

import result from "./export.js";
result();


//example 2 named import
import { nameFunc } from "./export.js";
nameFunc();

//example 3 import
import { name,email,age } from "./export.js";
console.log(name);
console.log(email);
console.log(age);

//example 4 import dengan as
import * as data from './export.js';
console.log(data.password);
console.log(data.id);
console.log(data.code);