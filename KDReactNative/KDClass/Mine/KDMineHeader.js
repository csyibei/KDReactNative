/**
 * Created by kaidi on 2016/10/17.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Navigator,
} from 'react-native';

var Dimensions = require('Dimensions');
var Win = Dimensions.get('window');
var KDPushView = require('../KDPushView');

var KDMineHeader = React.createClass({

    render(){
        return(
            <View style={styles.outLayerView}>
                <Image style={styles.bottomImage} source={require('../appImage/WechatIMG1.png')}></Image>
                <View style={styles.shade}></View>
                <View style={styles.viewS}></View>
                <Image style={styles.userImage} source={require('../appImage/WechatIMG1.png')}></Image>
                <Text style={styles.userName}>Kidi</Text>
            </View>

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
    outLayerView : {
        width : Win.width,
        height : 220,
        backgroundColor : 'white',
    },
    bottomImage : {
        width : Win.width,
        height : 110,
    },
    shade : {
        width : Win.width,
        height : 110,
        position : 'absolute',
        top : 0,
        backgroundColor : '#rgba(200,194,194,0.8)',
    },
    viewS : {
        width : Win.width,
        height : 110,
        backgroundColor : 'white',
    },
    userImage: {
        width : 80,
        height : 80,

        borderRadius : 40,
        borderWidth : 2,
        borderColor : 'white',
        marginLeft : (Win.width - 80)/ 2,
        position : 'absolute',
        bottom:(220 - 80) / 2,
    },
    userName : {
        width : 40,
        height : 30,
        marginLeft : (Win.width - 40)/ 2,
        position : 'absolute',
        bottom:(110 - 40) / 2,
        textAlign : 'center',
        fontSize : 20,
    },

});

module.exports = KDMineHeader;
