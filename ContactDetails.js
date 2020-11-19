class ContactDetails {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phNumber;
    email;

    get firstName() { return this.firstName; }
    get lastName() { return this.lastName; }
    get address() { return this.address; }
    get city() { return this.city; }
    get state() { return this.state; }
    get zip() { return this.zip; }
    get phNumber() { return this.phNumber; }
    get email() { return this.email; }


    set firstName(firstname) {
        let fnameRgx = new RegExp(/^[A-Z][a-z]{2,}$/);
        if (fnameRgx.test(firstname))
            this.firstName = firstname;
        else
            throw "First name is invalid";
    }


    set lastName(lastname) {
        let lnameRgx = new RegExp(/^[A-Z][a-z]{2,}$/);
        if (lnameRgx.test(lastname))
            this.lastName = lastname;
        else
            throw "Last name is invalid";
    }


    set address(address) {
        let addressRgx = new RegExp(/^[A-Za-z]{4,}$/);
        if (addressRgx.test(address))
            this.address = address;
        else
            throw "Address is invalid";
    }


    set city(city) {
        let cityRgx = new RegExp(/^[A-Za-z]{4,}$/);
        if (cityRgx.test(city))
            this.city = city;
        else
            throw "City is invalid";
    }

    
    set state(state) {
        let stateRgx = new RegExp(/^[A-Za-z]{4,}$/);
        if (stateRgx.test(state))
            this.state = state;
        else
            throw "State is invalid";
    }

    set zip(zip) {
        let zipRgx = new RegExp(/^[1-9][0-9]{5}$/);
        if (zipRgx.test(zip))
            this.zip = zip;
        else
            throw "Zip is invalid";
    }

    set phNumber(phone) {
        let phoneRgx = new RegExp(/^([0-9][ ])?[1-9][0-9]{9}$/);
        if (phoneRgx.test(phone))
            this.phNumber = phone;
        else
            throw "Phone is invalid";
    }

    set email(email) {
        let emailRgx = new RegExp(/^[a-z0-9A-Z]+([-.+_][a-z0-9+-]+)*@[a-z0-9A-Z]+[.][a-z]{2,3}([.][a-z]{2,})?$/);
        if (emailRgx.test(email))
            this.email = email;
        else
            throw "Email is invalid";
    }

}


let AddressBook = []

let contact1 = new ContactDetails();

contact1.firstName = "MS";
contact1.lastName = "Dhoni";
contact1.address = "Ranchi";
contact1.city = "Chennai";
contact1.state = "Jharkhand";
contact1.zip = "123 456";
contact1.phNumber = "99999999";
contact1.email = "msd@gmail.com";

AddressBook[0] = contact1;


let contact2 = new ContactDetails();

contact2.firstName = "V";
contact2.lastName = "Kohli";
contact2.address = "Delhi";
contact2.city = "Banglore";
contact2.state = "Dilli";
contact2.zip = "789 456";
contact2.email = "vk@gmail.com";

AddressBook[1] = contact2;



function EditContactDetails(firstName, city) {
    flag = 1;
    for (i = 0; i < AddressBook.length; i++) {
        if (AddressBook[i].firstName == firstName) {
            AddressBook[i].city = city;
            flag = 2;
            break;
        }
    }
    if (flag == 2) {
        console.log("Please enter correct name");
        return false;
    }
    return true;
}

let edit = EditContactDetails("MS", "CSK");

if (edit) {
    console.log("Edited");
}


function DeleteContactDetails(firstName) {
    flag = 1;
    for (i = 0; i < AddressBook.length; i++) {
        if (AddressBook[i].firstName == firstName) {
            AddressBook[i] = null;
            flag = 2;
            break;
        }
    }
    if (flag == 2) {
        console.log("Please enter correct name");
        return false;
    }
    return true;
}

let del = DeleteContactDetails("MS");

if (del) {
    console.log("Deleted");
}

