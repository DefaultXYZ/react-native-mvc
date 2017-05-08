'use strict';

import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4FBFF',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        fontSize: 24,
        fontFamily: (Platform.OS === 'android') ? 'sans-serif-light' : 'Helvetica-Light',
        textAlign: 'center'
    }
});

export default class Application extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello#_#World</Text>
            </View>
        );
    }
}