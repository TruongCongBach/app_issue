const Credential = require('./credential');
const Profile = require('./profile');
const Connection = require('../../../database/connection');

class RegistrationForm {


    /**
     *
     * @param {Credential} credential
     * @param {Profile} profile
     * @param {Connection} connection
     */
    constructor(credential, profile, connection) {
        this.credential = credential;
        this.profile = profile;
        this.connection = connection;
    }

    /**
     *
     * @param {Credential} credential
     */
    setId(credential) {
        this.id = credential.getId();
    }

    /**
     *
     * @param {Profile} date
     */
    setBrith(date) {
        this.date = date.getBirth();
    }
    /**
     *
     * @return {date}
     */
    getBirth(){
        return this.profile.getBirth();
    }

    /**
     *
     * @return {int} id
     */
    getId() {
        return this.credential.getId();
    }

    /**
     *
     * @return {Credential} credential
     */
    getCredential() {
        return this.credential;
    }

    /**
     *
     * @param {Credential} credential
     */
    setUser(credential) {
        this.user = credential.getUser();
    }

    /**
     *
     * @return {string} user
     */
    getUser() {
        return this.credential.getUser();
    }

    /**
     *
     * @param {Credential} credential
     */
    setPassword(credential) {
        this.password = credential.getPassword();
    }

    /**
     *
     * @return {string} password
     */
    getPassword() {
        return this.credential.getPassword();
    }

    /**
     *
     * @param {Profile} profile
     */
    setName(profile){
        this.name = profile.getName();
    }

    /**
     *
     * @return {string} name
     */
    getName() {
        return this.profile.getName();
    }

    /**
     *
     * @param {Profile} profile
     */
    setAddree(profile) {
        this.addree = profile.getAddress();
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.profile.getAddress();
    }

    /**
     *
     * @param {Profile} profile
     */
    setPhone(profile) {
        this.phone = profile.getPhone();
    }

    /**
     *
     * @return {string} phone
     */
    getPhone() {
        return this.profile.getPhone();
    }

    /**
     *
     * @param {Profile} profile
     */
    setEmail(profile) {
        this.email = profile.getEmail();
    }

    /**
     *
     * @return {string} email
     */
    getEmail() {
        return this.profile.getEmail();
    }

    /**
     * @param {Profile} avatar
      */
    setAvatar(avatar) {
        this.avatar = avatar.getAvatar();
    }

    /**
     *
     * @return {string} avatar
     */
    getAvatar() {
        return this.profile.getAvatar();
    }


    /**
     *
     * @param reqData
     */
    setFormData(reqData) {
        this.credential.setUser(reqData.user);
        this.credential.setPassword(reqData.password);
        this.profile.setName(reqData.name);
        this.profile.setBirth(reqData.date);
        this.profile.setEmail(reqData.email);
        this.profile.setPhone(reqData.phone);
        this.profile.setAddress(reqData.address);
        this.profile.setAvatar(reqData.avatar);
        return RegistrationForm;

    }
}

module.exports = RegistrationForm;
