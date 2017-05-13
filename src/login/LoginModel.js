'use strict';

export default class LoginModel {
    username = '';
    password = '';
    lastRegisteredUser;
    registeredUsers = [{
        id: 0,
        username: 'admin',
        password: 'admin'
    }];
    isLogin = false;

    login() {
        this.verifyOnEmpty();
        let user = this.getUser();
        if (typeof user === 'undefined' || this.password !== user.password) {
            throw new Error('Please, enter correct login/password');
        }
        this.isLogin = true;
    }

    register() {
        this.verifyOnEmpty();
        this.verifyOnWhitespace();
        let user = this.getUser();
        if (typeof user !== 'undefined') {
            throw new Error('User already exists');
        }
        let newUser = {
            id: 1001,
            username: this.username,
            password: this.password
        };
        this.registeredUsers.push(newUser);
        this.isLogin = true;
        this.lastRegisteredUser = newUser;
    }

    getUser() {
        for (let user of this.registeredUsers) {
            if (user.username === this.username) {
                return user;
            }
        }
    }

    verifyOnEmpty() {
        if (!this.username || !this.password) {
            throw new Error('Please, enter your login/password');
        }
    }

    verifyOnWhitespace() {
        if (this.username.includes(' ') || this.password.includes(' ')) {
            throw new Error('Login/password should not contain whitespaces');
        }
    }
}