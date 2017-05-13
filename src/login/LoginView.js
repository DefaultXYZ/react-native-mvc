'use strict';

import React, {Component} from "react";
import {Button, Platform, StyleSheet, Text, TextInput, View, ToastAndroid, Keyboard, AlertIOS} from "react-native";
import LoginController from "./LoginController";

let styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    },
    text: {
        flex: 0.4,
        color: '#000',
        fontSize: 24,
        fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Helvetica-Light',
        textAlign: 'center'
    },
    inputContainer: {
        flex: 1
    },
    textInput: {
        margin: 5,
        height: 40
    },
    buttonContainer: {
        margin: 10,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        margin: 5
    }
});

export default class LoginView extends Component {
    controller: LoginController;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.controller = new LoginController(props.model, this);
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
        LoginView.showResultMessage(result);
    }

    handleRegisterButton() {
        Keyboard.dismiss();
        let result = this.controller.register();
        LoginView.showResultMessage(result);
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
            <View style={styles.container}>
                <Text style={styles.text}>React MVC Application</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref='Username'
                        style={styles.textInput}
                        placeholder="Username"
                        onChangeText={(text) => this.setState({username: text})}
                        returnKeyType={'next'}
                        blurOnSubmit={false}
                        onSubmitEditing={(event) => {this.refs.Password.focus()}}/>
                    <TextInput
                        ref='Password'
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password: text})}/>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Login"
                                onPress={() => this.handleLoginButton()}/>
                        </View>
                        <View style={styles.button}>
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