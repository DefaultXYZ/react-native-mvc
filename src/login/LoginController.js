'use strict';
import LoginView from "./LoginView";
import LoginModel from "./LoginModel";

export default class LoginController {
    model: LoginModel;
    view: LoginView;

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.controller = this;
    }

    login() {
        this.readValues();
        try {
            this.model.login();
            if (this.model.isLogin()) {
                return 'Login is successful';
            }
        } catch (e) {
            return e.message;
        }
    }

    readValues() {
        this.model.username = this.view.username;
        this.model.password = this.view.password;
    }
}