'use strict';
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LoginView from "../../../src/login/LoginView";
import LoginModel from "../../../src/login/LoginModel";
import LoginController from "../../../src/login/LoginController";

describe('Login Feature', () => {

    let view = renderer.create(
        <LoginView/>
    ).getInstance();
    let model = new LoginModel();
    let controller = new LoginController(model, view);

    it('should login', () => {
        view.username = 'admin';
        view.password = 'admin';
        view.handleLoginButton();
        let isLogin = model.isLogin();
        expect(isLogin).toBe(true);
    });

    // it('should register new user', () => {
    //
    // });

    it('should display error on empty', () => {
        view.username = '';
        view.password = 'admin';
        controller.readValues();
        expect(() => model.login()).toThrowError('Please, enter your login/password');
    });

    it('should display error on wrong', () => {
        view.username = 'admin';
        view.password = 'password';
        controller.readValues();
        expect(() => model.login()).toThrowError('Please, enter correct login/password');
    });
});