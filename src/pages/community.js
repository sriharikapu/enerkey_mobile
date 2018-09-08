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

class Community extends Component {
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
                    <Text style={{marginTop: 12, marginLeft: -180, flex:1}}>
                        COOMUNITY CHALLENGE
                    </Text>
                </Header>
                <ScrollView style={styles.accountbg}>
                    <View>
                        <Image source={require('../../assets/BangkokCommunity.png')}
                               style={styles.BangkokCommunity} />
                    </View>
                    <View>
                        <Image source={require('../../assets/Ranking.png')}
                               style={styles.Ranking} />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

export default Community;
