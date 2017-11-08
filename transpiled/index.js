//Linear Grandient Image by YannCed ☺☻♥

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { View, Image, StyleSheet } from 'react-native';

export default class ImageGradient extends Component {

    constructor() {
        super();
    }

    render() {
        const {
            mainStyle = styles.main,
            gradientStyle = styles.gradientStyle,
            imageUrl = 'http://www.acmetools.com/wcsstore/AuroraStorefrontAssetStore/images/generic-error-icon-lrg.png',
            localImage = false,
            startPosition = { x: 0.0, y: 0.50 },
            rgbcsvStart = '255,255,255',
            rgbcsvEnd = '0,0,0',
            opacityStart = 0.9,
            opacityEnd = 0.9
        } = this.props;
        return React.createElement(
            Image,
            { style: mainStyle, source: localImage ? require(imageUrl) : { uri: imageUrl } },
            React.createElement(
                LinearGradient,
                { style: gradientStyle, start: startPosition, colors: [`rgba(${rgbcsvEnd},${opacityEnd})`, `rgba(${rgbcsvStart},${opacityStart})`] },
                this.props.children
            )
        );
    }
}

const styles = StyleSheet.create({
    gradientStyle: {
        flex: 1,
        backgroundColor: 'rgba(166,188,204,0.0)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 1,
        height: '100%',
        width: '100%'

    }
});