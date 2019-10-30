const Person = require('./person');
class Teacher extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
}
module.exports = Teacher;