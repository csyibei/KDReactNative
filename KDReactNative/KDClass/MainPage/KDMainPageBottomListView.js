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
    ListView
} from 'react-native';

var KDPushView = require('../KDPushView');

var KDMainPageBottomListView = React.createClass({

    render(){
        return(

            <Text></Text>

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

});

module.exports = KDMainPageBottomListView;