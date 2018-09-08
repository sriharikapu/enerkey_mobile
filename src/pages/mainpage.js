import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
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
import Modal from "react-native-modal";
import axios from 'axios';
import styles from "./styles";

class Mainpage extends Component {
    state = {
        isModalVisible: false
    };

    _toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
        // let config = {
        //     headers: {
        //         Authorization: "Token 2bf78103cc32ac8536cb393c5b71e7f49092678d"
        //     }
        // };
        // let BackendURL = 'https://peahivemobilebackends.azurewebsites.net/api/v2.0/devicecontrol/';
        // let message_body = {
        //     topic: "hivedevhub7",
        //     message: {
        //         status: "ON",
        //         device: "appjoin",
        //         type: 'devicecontrol'
        //     }
        // };
        // axios.post(BackendURL, message_body, config).then(
        //     console.log('message_body: ' + message_body),
        //     data => {
        //         console.log('posted to ' + BackendURL + 'got return ' + data.status + ' status');
        //         console.log('dsadsd')
        //     },
        //     error => {
        //         if(error.response.result) {
        //             alert(error.response.result);
        //         }
        //         console.log('post error ' + error);
        //     }
        // );
    }
    _toggleStatus = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
        let config = {
            headers: {
                Authorization: "Token 2bf78103cc32ac8536cb393c5b71e7f49092678d"
            }
        };
        let BackendURL = 'https://peahivemobilebackends.azurewebsites.net/api/v2.0/devicecontrol/';
        let message_body = {
            topic: "hivedevhub7",
            message: {
                status: "ON",
                device: "appjoin",
                type: 'devicecontrol'
            }
        };
        axios.post(BackendURL, message_body, config).then(
            console.log('message_body: ' + message_body),
            data => {
                console.log('posted to ' + BackendURL + 'got return ' + data.status + ' status');
                console.log('dsadsd')
            },
            error => {
                if(error.response.result) {
                    alert(error.response.result);
                }
                console.log('post error ' + error);
            }
        );
    };

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: '#F3EEE4'}}>
                    <Left />
                    <Text style={{marginTop: 12}}>
                        ENERGY CHALLENGE
                    </Text>
                    <Right >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Myaccount")}
                        >
                            <Image source={require('../../assets/account.png')}
                                   style={{height: 24, width: 24,}}
                            />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.accountbg}>
                    <View>
                        <Image source={require('../../assets/Content_Challenge.png')}
                               style={styles.MainContent} />
                    </View>
                    <View>
                        <Image source={require('../../assets/StartBuck.png')}
                               style={styles.StartBuck} />
                    </View>
                    <View>
                        <Image source={require('../../assets/Reward.png')}
                               style={styles.Reward} />
                    </View>
                    <TouchableOpacity onPress={this._toggleStatus }>
                        <Image source={require('../../assets/ECOMode.png')}
                               style={styles.TurnOn} />
                    </TouchableOpacity>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.happyhour_modal}>
                            <TouchableWithoutFeedback onPress={this._toggleModal} accessible={false}>
                                <Image source={require('../../assets/happyhour.png')}
                                              style={styles.Reward} />
                            </TouchableWithoutFeedback>
                        </View>
                    </Modal>
                </View>
            </Container>
        );
    }
}

export default Mainpage;
