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
import styles from "./styles";

class Myaccount extends Component {
    state = {
        isModalVisible: false
    };

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: '#F3EEE4'}}>
                    <Left >
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Text>MY ACCOUNT</Text>
                    </Body>
                    <Right >
                        <TouchableOpacity >
                            <Image source={require('../../assets/account.png')}
                                   style={{height: 24, width: 24,}}
                            />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <ScrollView style={styles.accountbg}>
                    <View>
                        <Image source={require('../../assets/accountdata.png')}
                               style={styles.accountdata} />
                    </View>
                    <View >
                        <TouchableOpacity onPress={this._toggleModal}>
                            <Image source={require('../../assets/account.png')}
                                   style={styles.deviceIcon} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image source={require('../../assets/enrgydata.png')}
                               style={styles.energydata} />
                    </View>
                    <View>
                        <Image source={require('../../assets/leaderbrord.png')}
                               style={styles.leaderbrord} />
                    </View>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={styles.happyhour_modal}>
                            <TouchableWithoutFeedback onPress={this._toggleModal} accessible={false}>
                                <Image source={require('../../assets/getreward.png')}
                                       style={styles.Reward} />
                            </TouchableWithoutFeedback>
                        </View>
                    </Modal>
                    <View >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Community")}
                        >
                            <Image source={require('../../assets/Thailand.png')}
                                   style={styles.Thailand} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

export default Myaccount;
