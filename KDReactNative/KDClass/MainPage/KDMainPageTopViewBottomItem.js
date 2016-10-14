/**
 * Created by kaidi on 2016/10/13.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator
} from 'react-native';

var Dimensions = require('Dimensions');
var Win = Dimensions.get('window');
var KDPushView = require('../KDPushView');

var KDMainPageTopViewBottomItem = React.createClass({

    getDefaultProps(){
        return{
            iconName: '',
            text : '',
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={() => {this.pushToxxxx()}}>
                <View style={styles.viewS}>
                    <Image source={{uri: this.props.iconName}} style={styles.imageS}/>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    },


    pushToxxxx(){
        this.props.navigator.push(
            {
                component: KDPushView, // 要跳转的版块
                title:'详情页'
            }
        );
    }



});

const styles = StyleSheet.create({
    viewS : {
        width : Win.width / 4,
        height : 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageS : {
        width : 32,
        height : 32,
        marginBottom : 10,
        resizeMode : Image.resizeMode.contain,
    },

    textS : {
    }
});

module.exports = KDMainPageTopViewBottomItem;