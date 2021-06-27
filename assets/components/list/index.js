import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import listData from './list';
import Item from '../item/index';

import styles from './styles';


const List = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={listData}
                renderItem={({item}) => <Item list={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                // showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default List;