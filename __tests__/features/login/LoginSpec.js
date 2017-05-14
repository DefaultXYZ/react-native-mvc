'use strict';
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import LoginModel from "../../../src/login/LoginModel";
import LoginController from "../../../src/login/LoginController";
import MockView from "./MockView";

describe('Login Feature', () => {

    let view = renderer.create(
        <MockView/>
    ).getInstance();
    let model = new LoginModel();
    let controller = new LoginController(model, view);

    beforeEach(() => {
        model.username = '';
        model.password = '';
        model.registeredUsers = [{
            id: 0,
            username: 'admin',
            password: 'admin'
        }];
    });

    describe('When user login', () => {

        it('should login', () => {
            view.username = 'admin';
            view.password = 'admin';
            view.handleLoginButton();
            let isLogin = model.isLogin;
            expect(isLogin).toBe(true);
        });

        it('should display message', () => {
            view.username = 'admin';
            view.password = 'admin';
            let resultMessage = controller.login();
            expect(resultMessage).toBe('Login is successful');
        });

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

    describe('When user registering', () => {

        it('should register new user', () => {
            view.username = 'user';
            view.password = 'password';
            view.handleRegisterButton();
            let isLogin = model.isLogin;
            expect(isLogin).toBe(true);
        });

        it('should return new user id', () => {
            view.username = 'user';
            view.password = 'password';
            view.handleRegisterButton();
            let newUserId = model.lastRegisteredUser.id;
            expect(newUserId).toBe(1001);
        });

        it('should display message', () => {
            view.username = 'user';
            view.password = 'password';
            let resultMessage = controller.register();
            expect(resultMessage).toBe('Registered successfully');
        });

        it('should display error existed user', () => {
            view.username = 'admin';
            view.password = 'aaa';
            controller.readValues();
            expect(() => model.register()).toThrowError('User already exists');
        });

        it('should display error on whitespaces', () => {
            view.username = 'us er';
            view.password = 'aaa';
            controller.readValues();
            expect(() => model.register()).toThrowError('Login/password should not contain whitespaces');
        });

        it('should display error on empty', () => {
            view.username = '';
            view.password = 'admin';
            controller.readValues();
            expect(() => model.register()).toThrowError('Please, enter your login/password');
        });

    });
});