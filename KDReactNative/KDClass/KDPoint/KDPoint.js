/**
 * Created by kaidi on 2016/10/18.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';



var KDPoint = React.createClass({
    render(){
        return(
            <TouchableOpacity  style={styles.viewS}>
                <View >
                    <Text>111</Text>
                </View>
            </TouchableOpacity>
        );
    },

    popToxxxx(){
        DeviceEventEmitter.emit('pop', {isshow : false});
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    viewS : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = KDPoint;