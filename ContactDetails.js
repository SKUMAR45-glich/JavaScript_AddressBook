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