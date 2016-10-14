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

var KDPushView = React.createClass({
   render(){
       return(
           <TouchableOpacity onPress={()=>{this.popToxxxx()}} style={styles.viewS}>
               <View >
                   <Text>KDPush</Text>
               </View>
           </TouchableOpacity>
       );
   },

    popToxxxx(){
        DeviceEventEmitter.emit('pop', {isshow : false});
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
   viewS : {
       flex : 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
   },
});

module.exports = KDPushView;