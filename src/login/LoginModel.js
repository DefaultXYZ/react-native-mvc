'use strict';

export default class LoginModel {
    username = '';
    password = '';
    lastRegisteredUser;
    isLogin = false;
    registeredUsers = [{
        id: 0,
        username: 'admin',
        password: 'admin'
    }];

    login() {
        this.verifyOnEmpty();
        this.verifyUserCredentials();
        this.isLogin = true;
    }

    register() {
        this.verifyOnEmpty();
        this.verifyOnWhitespace();
        this.verifyUserExists();
        let newUser = this.createBasicUser();
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

    verifyUserCredentials() {
        let user = this.getUser();
        if (typeof user === 'undefined' || this.password !== user.password) {
            throw new Error('Please, enter correct login/password');
        }
    }

    verifyUserExists() {
        let user = this.getUser();
        if (typeof user !== 'undefined') {
            throw new Error('User already exists');
        }
    }

    createBasicUser() {
        return {
            id: 1001,
            username: this.username,
            password: this.password
        };
    }
}