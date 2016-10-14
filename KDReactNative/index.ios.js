/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


var TabBar = require('./KDClass/KDTabbar');
var KDNav = require('./KDClass/KDNavigator');

var KDReactNative = React.createClass({
  render() {
    return (
        <KDNav />
    );
  }
});


AppRegistry.registerComponent('KDReactNative', () => KDReactNative);
