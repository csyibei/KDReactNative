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

var KDNative = require('./KDNative');

var KDPoint = React.createClass({
    render(){
        return(
            <KDNative></KDNative>
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