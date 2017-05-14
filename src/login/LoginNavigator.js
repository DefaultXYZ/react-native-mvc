'use strict';

import React from "react";
import {StackNavigator} from "react-navigation";
import LoginView from "./LoginView";
import HelloView from "../hello/HelloView";

const LoginNavigator = StackNavigator({
    Login: {
        screen: LoginView
    },
    Hello: {
        screen: HelloView
    }
}, {
    initialRouteName: 'Login'
});

export default LoginNavigator;