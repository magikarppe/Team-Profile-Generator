const Employee = require("./Employee");

// TODO: define and export the Engineer class.  (This class should inherit from Employee)
class Engineer extends Employee{
    constructor(name, id, email, github ){
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;