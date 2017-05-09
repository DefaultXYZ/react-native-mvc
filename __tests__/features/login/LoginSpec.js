'use strict';
import "react-native";
import React from "react";
import MockController from "./MockController";
import MockView from "./MockView";
import MockModel from "./MockModel";
import renderer from "react-test-renderer";

describe('Login Feature', () => {

    let view = renderer.create(
        <MockView/>
    ).getInstance();
    let model = new MockModel;
    new MockController(model, view);

    it('should login', () => {
        view.username = 'admin';
        view.password = 'admin';
        let isLogin = view.handleLoginButton();
        expect(isLogin).toBe(true);
    });

    // it('should register new user', () => {
    //
    // });

    it('should display error on empty', () => {
        view.username = '';
        view.password = 'admin';
        expect(() => view.handleLoginButton()).toThrowError('Please, enter your login/password');
    });

    it('should display error on wrong', () => {
        view.username = 'admin';
        view.password = 'password';
        expect(() => view.handleLoginButton()).toThrowError('Please, enter correct login/password');
    });
});