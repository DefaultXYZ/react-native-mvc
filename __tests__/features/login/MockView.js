'use strict';

import React, {Component} from "react";
import {AlertIOS, Button, Keyboard, Platform, Text, TextInput, ToastAndroid, View} from "react-native";
import LoginController from "../../../src/login/LoginController";


export default class MockView extends Component {
    static navigationOptions = {
        header: null
    };
    controller: LoginController;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        Keyboard.dismiss();
        let result = this.controller.login();
        MockView.showResultMessage(result);
    }

    handleRegisterButton() {
        Keyboard.dismiss();
        let result = this.controller.register();
        MockView.showResultMessage(result);
    }

    static showResultMessage(text) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(text, ToastAndroid.SHORT);
        } else {
            AlertIOS.alert(text);
        }
    }

    render() {
        return (
            <View>
                <Text>React MVC Application</Text>
                <View>
                    <TextInput/>
                    <TextInput/>
                    <View>
                        <View>
                            <Button
                                title="Login"
                                onPress={() => this.handleLoginButton()}/>
                        </View>
                        <View>
                            <Button
                                title="Register"
                                onPress={() => this.handleRegisterButton()}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}