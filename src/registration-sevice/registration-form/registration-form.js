const Credential    = require('./credential');
const Profile       = require('./profile');

class RegistrationForm {


    /**
     *
     * @param {Credential} credential
     * @param {Profile} profile
     * @param {Connection} connection
     */
    constructor(credential, profile, connection) {
        this.credential = credential;
        this.profile    = profile;
        this.connection = connection;
    }

    /**
     *
     * @return {Credential}
     */
    getCredential() {
        return this.credential;
    }

    /**
     *
     * @return {Profile}
     */
    getProfile() {
        return this.profile;
    }


    /**
     *
     * @param data
     * @return {RegistrationForm}
     */
    setFormData(data){
        this.credential.setUser(data.user);
        this.credential.setPassword(data.password);
        this.profile.setName(data.fullName);
        this.profile.setBirth(data.dateOfBirth);
        this.profile.setAddress(data.address);
        this.profile.setPhone(data.phone);
        this.profile.setEmail(data.email);
        this.profile.setAvatar(data.avatar);
        return RegistrationForm;
    }
}

module.exports = RegistrationForm;
