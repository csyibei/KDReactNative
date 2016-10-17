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
    Navigator
} from 'react-native';

var Dimensions = require('Dimensions');
var Win = Dimensions.get('window');
var KDPushView = require('../KDPushView');


var KDMineItem = React.createClass({

    getDefaultProps(){
        return{
            iconName: '',
            text : '',
            count : 0,
        }
    },

    render(){
        //require('image!group')
        //this.props.iconName
        return(
            <TouchableOpacity onPress={() => {this.pushToxxxx()}}>
                <View style={styles.viewS}>
                    <Image source={{uri : 'LHTabBar_homenow'}} style={styles.imageS}/>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    },


    pushToxxxx(){
        alert(this.props.count)
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
        width : Win.width / 3,
        height : 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageS : {
        width : 28,
        height : 28,
        marginBottom : 10,
        resizeMode : Image.resizeMode.contain,
    },

    textS : {
    }
});

module.exports = KDMineItem;