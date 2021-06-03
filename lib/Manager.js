const Employee = require("./Employee")

// TODO: define and export the Manager class (This class should inherit from Employee)
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
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

    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager