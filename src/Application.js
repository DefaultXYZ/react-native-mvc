'use strict';

import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import LoginView from "./login/LoginView";
import LoginModel from "./login/LoginModel";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4FBFF',
        flex: 1,
    }
});

export default class Application extends Component {

    render() {
        let model = new LoginModel();
        return (
            <View style={styles.container}>
                <LoginView model={model}/>
            </View>
        );
    }
}