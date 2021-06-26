import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';

const Item = () => {
    return (
        <View style={styles.mainCon}>

            <View style={styles.main}>

                <ImageBackground source={require('../../../assets/images/colors.jpg')} style={styles.image} />

                <View style={styles.headers}>
                    <Text style={styles.h1}>lolol can't believe this works</Text>
                    <Text style={styles.h2}>dermatology</Text>
                </View>

            </View>

        </View>
    )
};

export default Item;