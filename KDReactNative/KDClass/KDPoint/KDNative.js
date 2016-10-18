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
    requireNativeComponent,
} from 'react-native';

var UIText = requireNativeComponent('KDView', KDView);

var KDView = React.createClass({
    render(){
        return(
                    <UIText style={{flex : 1,backgroundColor:'green'}}></UIText>
        );
    },

});

const styles = StyleSheet.create({
    viewS : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = KDView;

