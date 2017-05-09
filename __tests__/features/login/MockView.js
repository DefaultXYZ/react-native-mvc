'use strict';
import React, {Component} from "react";
import {Button, TextInput, View} from "react-native";
import MockController from "./MockController";

export default class MockView extends Component {
    controller: MockController;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLogin: true
        };
    }

    get username() {
        return this.state.username;
    }

    set username(username) {
        this.setState({username: username});
    }

    get password() {
        return this.state.password;
    }

    set password(password) {
        this.setState({password: password});
    }

    handleLoginButton() {
        return this.controller.login();
    }

    handleRegisterButton() {

    }

    render() {
        return (
            <View>
                <TextInput/>
                <TextInput/>
                <Button title="Login" onPress={() => this.handleLoginButton()}/>
                <Button title="Register" onPress={() => this.handleRegisterButton()}/>
            </View>
        );
    }
}