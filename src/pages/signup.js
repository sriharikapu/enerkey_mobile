import React, { Component } from "react";
import { View, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text
} from "native-base";
import styles from "./styles";

class Signup extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#F3EEE4', flex: 1}}>
                <View style={{marginTop: 78, marginLeft: 109}}>
                    <Image source={require('../../assets/signuplogo.png')}/>
                </View>
                <Text style={styles.welcome}>
                    WELCOME!
                </Text>
                <View style={styles.content}>
                    <Text style={styles.text2}>
                        If you wanna join our challenge to get the reward.
                        We will send the thing that help your home to save energy and win the challenge.
                    </Text>
                </View>

                {/*<Text style={styles.content}>*/}
                    {/*We will send the thing that help your home to save energy and win the challenge.*/}
                {/*</Text>*/}
                <View style={{marginTop: 18, marginLeft: 45}}>
                    <Image source={require('../../assets/TextInput.png')}/>
                </View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Mainpage")}
                    style={{marginTop: 69, marginLeft: 113}}
                >
                    <Image source={require('../../assets/signup.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Signup;
