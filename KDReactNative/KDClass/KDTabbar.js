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
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


var KDMainPage = require('./MainPage/KDMainPage');

var KDTabbar = React.createClass({

    getInitialState(){
        return{
            selectedTab : '主页'
        }
    },

    render(){
        return(


            <TabNavigator>

                {this.renderTabbar('主页','LHTabBar_home','LHTabBar_homenow','主页')}

                {this.renderTabbar('乐活点','LHTabBar_point','LHTabBar_pointnow','乐活点')}

                {this.renderTabbar('购物车','LHTabBar_buycar','LHTabBar_buycarnow','购物车')}

                {this.renderTabbar('我的','LHTabBar_me','LHTabBar_menow','我的')}

            </TabNavigator>

        );

    },

    renderTabbar(title,iconName,selectIconName,selectedTab){
        return(

            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle = {styles.selectTitleS}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.imageS}/>} // 图标
                renderSelectedIcon={() =><Image source={{uri: selectIconName}} style={styles.imageS}/>}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                <KDMainPage navigator={this.props.navigator}></KDMainPage>
            </TabNavigator.Item>
        );

    },
});

const styles = StyleSheet.create({
    imageS : {
        width : 23,
        height : 26,
        resizeMode : Image.resizeMode.contain,
    },

    selectTitleS : {
        color : 'rgba(0,146,69,1)',
    },
});

module.exports = KDTabbar;
