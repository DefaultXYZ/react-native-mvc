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
        } catch (e) {
            this.view.showLoginFailedToast();
        }
        if (this.model.isLogin()) {
            this.view.showLoginSuccessToast();
        }
    }

    readValues() {
        this.model.username = this.view.username;
        this.model.password = this.view.password;
    }
}