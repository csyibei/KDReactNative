/**
 * Created by kaidi on 2016/10/12.
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

var KDMainPageTopView = require('./KDMainPageTopView');
var KDPushView = require('../KDPushView');
var KDMainPageBottomListView = require('./KDMainPageBottomListView');

var KDMainPage = React.createClass({

    render(){
        return(

            <ScrollView style={styles.scrollViewS}>
                <KDMainPageTopView navigator={this.props.navigator} />
                <KDMainPageBottomListView navigator={this.props.navigator}></KDMainPageBottomListView>
            </ScrollView>

            // <TouchableOpacity onPress={()=>{this.pushToxxxx()}} style={styles.viewS}>
            //     <View >
            //         <Text>KDMainPage</Text>
            //     </View>
            // </TouchableOpacity>
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
    viewS : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    scrollViewS:{
        flex : 1,
        backgroundColor:'#e8e8e8',
    },
});

module.exports = KDMainPage;