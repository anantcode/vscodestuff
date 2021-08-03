const cp = require("child_process");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    dance() {
        console.log("Yohuu");
        cp.exec(`rundll32 user32.dll,MessageBeep`);
    }

    intro() {
        console.log(`Hi, I am ${this.name}, my age is ${this.age}`);
    }
}

let person = new Person("Jack", 36);
let c = "pagle";

person.intro();
person.dance();
