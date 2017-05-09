'use strict';
import MockModel from "./MockModel";
import MockView from "./MockView";

export default class MockController {
    model: MockModel;
    view: MockView;

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.controller = this;
    }

    login() {
        this.readValues();
        this.model.login();
        return this.model.isLogin();
    }

    readValues() {
        this.model.username = this.view.username;
        this.model.password = this.view.password;
    }
}