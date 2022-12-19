import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export default function EasterEgg() {
    const image1 = require('../../../assets/image1.jpeg');
    const image2 = require('../../../assets/2.png');
    const image3 = require('../../../assets/3.png');

    const images = [
        image1,
        image2,
        image3
    ];

    const randomNumber = Math.floor(Math.random() * 3);
    const randomImage = images[randomNumber];

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={randomImage} />
        </View>
    );
}
