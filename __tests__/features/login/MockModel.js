'use strict';

export default class MockModel {
    username = '';
    password = '';
    isUserInTheSystem = false;

    isLogin() {
        return this.isUserInTheSystem;
    }

    login() {
        if (!this.username || !this.password) {
            throw new Error('Please, enter your login/password');
        }
        if (this.username !== 'admin' || this.password !== 'admin') {
            throw new Error('Please, enter correct login/password');
        }
        this.isUserInTheSystem = true;
    }

    static registerUser(username, password) {
        return {
            id: 1,
            username: username,
            password: password
        };
    }
}