import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../button/index';
import styles from './styles';

const Item = (props) => {

    const { name, tagline, taglineCTA } = props;

    return (
        <View style={styles.main}>

            {/* <ImageBackground source={require('../../../assets/images/rick-morty.jpg')} style={styles.image} /> */}

            <View style={styles.headers}>
                <Text style={styles.h1}>{name}</Text>
                <Text style={styles.h2}>{tagline} {' '}
                    <Text style={styles.sub}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Button
                    type='primary'
                    content={'This is button'}
                    onPress={() => {
                        console.log('button was pressed')
                    }}
                />
                <Button
                    type='secondary'
                    content={'Second button'}
                    onPress={() => {
                        console.log('second button was pressed')
                    }}
                />
            </View>
        </View>
    )
};

export default Item;