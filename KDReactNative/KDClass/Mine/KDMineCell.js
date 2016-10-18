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

var KDMineCell = React.createClass({

    render(){
        return(
            <View style={styles.outLayerView}>
                <View style={styles.leftView}>
                    <Image source={{uri : 'LHTabBar_homenow'}} style={styles.imageS}></Image>
                    <Text style={{marginLeft : 8}}>我的订单</Text>
                </View>
               <View style={styles.rightView}>
                   <Text style={{marginRight : 8}}>查看全部订单</Text>
               </View>
            </View>

        );
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
    outLayerView : {
        width : Win.width,
        height : 50,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    imageS : {
        width : 30,
        height : 30,
        marginLeft:5,

    },
    leftView: {
        flexDirection : 'row',
        alignItems: 'center',
    },
    rightView: {
    },
});

module.exports = KDMineCell;