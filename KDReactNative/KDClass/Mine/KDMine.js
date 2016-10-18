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
    ScrollView
} from 'react-native';

var KDPushView = require('../KDPushView');
var KDMineHeader = require('./KDMineHeader');
var KDMineCell  = require('./KDMineCell')
var KDMineItem = require('./KDMineItem');

var KDMine = React.createClass({

    render(){
        return(
            <ScrollView style={{backgroundColor:'#e8e8e8'}}>
                <KDMineHeader></KDMineHeader>

                <View style={{marginTop:0}}>
                    <KDMineCell ></KDMineCell>
                </View>
                <View style={{marginTop:5,flexDirection : 'row'}}>
                    {this.KDRenderItem()}
                </View>
                <View style={{marginTop:5}}>
                    <KDMineCell ></KDMineCell>
                </View>
                <View style={{marginTop:5}}>
                    <KDMineCell ></KDMineCell>
                </View>
                <View style={{marginTop:5}}>
                    <KDMineCell ></KDMineCell>
                </View>
                <View style={{marginTop:5}}>
                    <KDMineCell ></KDMineCell>
                </View>

            </ScrollView>


        );
    },

    KDRenderItem(){
        var itemArr = [];
        var itemTextArr = ['代付款','待发货','待收货'];
        var itemImageName = ['../appImage/knock.png','../appImage/hot.png','../appImage/mainPage_classifyChat.png','../appImage/groud.png'];
        for (var i = 0; i < itemTextArr.length; i++){
            var text = itemTextArr[i];
            var icon =  itemImageName[i];
            itemArr.push(
                <KDMineItem key={i} iconName = {icon} text = {text} navigator={this.props.navigator} count = {3}>

                </KDMineItem>
            );
        }
        return itemArr;
    },

    pushToxxxx(){
        this.props.navigator.push(
            {
                component: KDPushView,
                title:'详情页'
            }
        );
    }
});

const styles = StyleSheet.create({

});

module.exports = KDMine;