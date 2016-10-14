/**
 * Created by kaidi on 2016/10/9.
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


let tabBarHeight = 0;

var KDPushView = require('./KDPushView');

var KDRootView = React.createClass({



    getDefaultProps(){
        return{
            ishidden : true,
            popToIndex: null
        }
    },

    render(){
        return(
          <TouchableOpacity onPress={()=>{this.pushToxxx(this.props.ishidden)}} style={styles.container}>
              <View  >

                  <Text>KDRootView</Text>
              </View>
          </TouchableOpacity>
        );
    },

    // componentWillUnmount(){
    //     this.props.navigator.navigationContext.addListener('willfocus',()=>{this.callback()});
    // },
    //
    // componentDidMount(){
    //
    // },
    //
    // callback(){
    //     alert('111');
    // },

    pushToxxx(ishidden){
        // this.props.popToIndex(ishidden);

        this.props.navigator.push(
            {
                component: KDPushView, // 要跳转的版块
                title:'详情页'
            }
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    hidden: {
        overflow: 'hidden',
        height: tabBarHeight,
    },
});

module.exports = KDRootView;

