'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class HelloView extends Component {
    static navigationOptions = {
        title: 'Hello'
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>Hello, {params.username}</Text>
            </View>
        );
    }
}