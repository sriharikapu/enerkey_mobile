import React from 'react';
import Setup from "./src/setup";
import { Permissions, Notifications } from 'expo';

export default class App extends React.Component {
    registerForPushNotifications = async () => {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        const token = await Notifications.getExpoPushTokenAsync();

        // this.sendPushNotification(token);
        console.log(status, token, typeof token);
        // console.log("Test to get the Token from EXPO Server");
        this.setState({ token });
        return;
    };

    componentDidMount() {
        this.registerForPushNotifications();
    }

    render() {
        return <Setup />;
    }
}