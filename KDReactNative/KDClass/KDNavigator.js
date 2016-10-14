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
    Navigator
} from 'react-native';

var KDTabbar = require('./KDTabbar');

var KDNavigator = React.createClass({
    render(){
        return(
            <Navigator
                initialRoute={{name:'Home',component:KDTabbar}}
                configureScene={()=>{
                  return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                  let Component = route.component;
                  return <Component {...route.passProps}  navigator={navigator}/>;
                }}
            />
        );
    },

});



module.exports = KDNavigator;