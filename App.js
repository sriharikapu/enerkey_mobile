import React from 'react';
import Setup from "./src/setup";

const config = {
    backendurl: 'http://peahivemobilebackends.azurewebsites.net/api/v2.0/devicecontrol/',
    Authorization: 'Token 2bf78103cc32ac8536cb393c5b71e7f49092678d',
    Cookie: 'ARRAffinity=a3526603b65ff2e9649003895f94c37af437b75057f236fd6937f7270f5236ed',
    ContentType: 'application/json',
    Topic: 'hivedevhub7',
};

export default class App extends React.Component {
    render() {
        return <Setup />;
    }
}