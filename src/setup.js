import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import styles from './styles';
import Signup from "./pages/signup"
import Mainpage from "./pages/mainpage"
import Myaccount from "./pages/myaccount"
import Community from "./pages/community"

const AppNavigator = StackNavigator(
    {
        Signup: {screen: Signup},
        Mainpage: {screen: Mainpage},
        Myaccount: {screen: Myaccount},
        Community: {screen: Community},

    },
    {
        initialRouteName: "Signup",
        headerMode: "none"
    }
);

export default class App extends React.Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}

