import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EEE4',
    },
    button: {
        width: 240,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgb(255, 110, 164)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.1,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '500',
    },
    subText: {
        color: '#ffffff',
        opacity: 0.6,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fontWeight: '500',
    },
    text_cover: {
        height: 48,
        width: '100%',
        padding: 16,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deviceIcon: {
        marginTop: -270,
        marginLeft: 150,
        alignItems: 'center',
    },
    accountbg: {
        backgroundColor: '#F3EEE4',
    },
    accountdata: {
        marginTop: 35,
    },
    energydata: {
        marginTop: -50,
        marginLeft: 35,
    },
    leaderbrord: {
        marginTop: 13,
        marginLeft: 35,
    },
    welcome: {
        flex: 1,
        fontSize: 24,
        marginTop: 28,
        marginLeft: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: 272,
        height: 14,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 71,
    },
    text2: {
        fontSize: 12,
    },
    MainContent: {
        marginTop: 20,
        marginLeft: 60,
    },
    StartBuck: {
        marginTop: 16,
        marginLeft: 9,
    },
    Reward: {
        marginTop: 16,
        marginLeft: 9,
    },
    TurnOn: {
        marginTop: 16,
        marginLeft: 128,
    },
    happyhour_modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Thailand: {
        marginTop: -36,
        marginLeft: 321,
    },
    BangkokCommunity: {
        marginTop: 13,
        marginLeft: 25,
    },
    Ranking: {
        marginTop: 10,
        marginLeft: 25,
    },
});

export default styles;